const fs = require("fs");
const path = require("path");

const swaggerPath = path.resolve(__dirname, "../swagger.json");
const contractsPath = path.resolve(__dirname, "../api/data-contracts.ts");
const modulesDir = path.resolve(__dirname, "../api/modules");

const sanitizeTag = (tag) =>
  tag.toLowerCase().replace(/[^\w]/g, "_");

if (!fs.existsSync(modulesDir)) {
  fs.mkdirSync(modulesDir, { recursive: true });
}

const swagger = JSON.parse(fs.readFileSync(swaggerPath, "utf-8"));
const dataContracts = fs.readFileSync(contractsPath, "utf-8");

// === Step 1: Extract all blocks ===
const blocks = dataContracts
  .split(/(?=export (interface|enum|type) )/)
  .filter(Boolean);

const nameToBlock = {};
blocks.forEach((block) => {
  const match = block.match(/export (interface|enum|type) (\w+)/);
  if (!match) return;
  const name = match[2];
  nameToBlock[name] = block.trim();
});

// === Step 2: Assign tags recursively from Swagger ===
const dtoToTag = {};
const visited = new Set();

function assignTagRecursive(name, tag) {
  if (!name || visited.has(name)) return;
  if (!nameToBlock[name]) return;

  visited.add(name);
  dtoToTag[name] = tag;

  const block = nameToBlock[name];
  const references = [...block.matchAll(/\b[A-Z][A-Za-z0-9_]+\b/g)]
    .map((m) => m[0])
    .filter((ref) => ref !== name && nameToBlock[ref]);

  for (const ref of references) {
    if (!dtoToTag[ref]) {
      assignTagRecursive(ref, tag);
    }
  }
}

for (const [_, methods] of Object.entries(swagger.paths)) {
  for (const [__, op] of Object.entries(methods)) {
    const rawTag = op.tags?.[0]?.split(" - ")[0]?.toLowerCase();
    const tag = sanitizeTag(rawTag || "common");
    if (!tag) continue;

    const refs = [];

    Object.values(op.requestBody?.content || {}).forEach((c) => {
      if (c.schema?.$ref) refs.push(c.schema.$ref.split("/").pop());
    });

    Object.values(op.responses || {}).forEach((r) => {
      Object.values(r.content || {}).forEach((c) => {
        if (c.schema?.$ref) refs.push(c.schema.$ref.split("/").pop());
      });
    });

    refs.forEach((dto) => assignTagRecursive(dto, tag));
  }
}

// === Step 3: Create name-to-tag map
const nameToModule = {};
Object.keys(nameToBlock).forEach((name) => {
  const tag = dtoToTag[name] || "common";
  nameToModule[name] = tag;
});

// === Step 4: Group blocks by tag/module
const groupedByModule = {};
Object.entries(nameToBlock).forEach(([name, code]) => {
  const tag = nameToModule[name];
  if (!groupedByModule[tag]) groupedByModule[tag] = [];
  groupedByModule[tag].push({ name, code });
});

// === Step 5: Expand definitions recursively and write to file
for (const [tag, entries] of Object.entries(groupedByModule)) {
  const included = new Set();
  const outputBlocks = [];

  function includeType(name) {
    if (included.has(name)) return;
    if (!nameToBlock[name]) return;

    included.add(name);

    const block = nameToBlock[name];
    const refs = [...block.matchAll(/\b[A-Z][A-Za-z0-9_]+\b/g)]
      .map((m) => m[0])
      .filter((ref) => ref !== name && nameToBlock[ref]);

    refs.forEach(includeType);
    outputBlocks.push(block);
  }

  entries.forEach(({ name }) => includeType(name));

  const content = outputBlocks.join("\n\n") + "\n";
  const safeTag = sanitizeTag(tag);
  const outPath = path.join(modulesDir, `${safeTag}.ts`);

  fs.writeFileSync(outPath, content, "utf8");
  console.log(`✅ Written: ${outPath}`);
}

console.log("🎉 All types redefined per module with no imports.");
