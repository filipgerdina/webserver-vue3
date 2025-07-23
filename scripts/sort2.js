const fs = require("fs");
const path = require("path");

const contractsPath = path.resolve(__dirname, "../api/data-contracts.ts");
const modulesDir = path.resolve(__dirname, "../api/modules");
const clientDir = path.resolve(__dirname, "../api");

// === Ensure modules directory exists ===
if (!fs.existsSync(modulesDir)) {
  fs.mkdirSync(modulesDir, { recursive: true });
}

// === Load and parse data-contracts.ts ===
const dataContracts = fs.readFileSync(contractsPath, "utf-8");

// Split into export blocks
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

// === Helper to recursively collect all dependencies ===
function collectDTOs(names) {
  const included = new Set();
  const outputBlocks = [];

  function include(name) {
    if (included.has(name)) return;
    if (!nameToBlock[name]) return;

    included.add(name);

    const block = nameToBlock[name];
    const refs = [...block.matchAll(/\b[A-Z][A-Za-z0-9_]+\b/g)]
      .map((m) => m[0])
      .filter((ref) => ref !== name && nameToBlock[ref]);

    refs.forEach(include);
    outputBlocks.push(nameToBlock[name]);
  }

  names.forEach(include);

  return [...new Set(outputBlocks)].join("\n\n") + "\n";
}

// === Process each file in /src/api-client ===
fs.readdirSync(clientDir).forEach((filename) => {
  const filePath = path.join(clientDir, filename);
  const isTSFile = filename.endsWith(".ts");
  const isContracts = filename === "data-contracts.ts";
  const isModuleFile = filename === "modules" || filename.startsWith(".");

  if (!isTSFile || isContracts || isModuleFile) return;

  const content = fs.readFileSync(filePath, "utf-8");

  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*["']\.\/data-contracts["']/);
  if (!importMatch) return;

  const importedNames = importMatch[1]
    .split(",")
    .map((n) => n.trim())
    .filter(Boolean);

  if (importedNames.length === 0) return;

  const dtoContent = collectDTOs(importedNames);
  const outPath = path.join(modulesDir, filename);

  fs.writeFileSync(outPath, dtoContent, "utf-8");
  console.log(`✅ Written DTO module: ${outPath}`);
});

console.log("🎉 All DTO modules generated successfully.");
