const path = require("path");
const fs = require("fs");

const baseDir = path.resolve(__dirname, "../api");
const modulesDir = path.join(baseDir, "modules");
const dtosDir = path.join(baseDir, "request-dtos");
const fieldsDir = path.join(baseDir, "generatedTypesAndFields");
const outputDir = path.join(baseDir, "combined");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Get module names (strip extension)
const getModuleNames = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir)
        .filter(f => f.endsWith(".ts"))
        .map(f => path.basename(f).replace(/(\.request-dtos|\.fields-and-types)?\.ts$/, ""))
    : [];

const allModules = new Set([
  ...getModuleNames(modulesDir),
  ...getModuleNames(dtosDir),
  ...getModuleNames(fieldsDir),
]);

allModules.forEach(module => {
  const parts = [];

  const fromFile = (dir, suffix) => {
    const filePath = path.join(dir, `${module}${suffix}`);
    return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
  };

  const modFile = fromFile(modulesDir, ".ts");
  const dtoFile = fromFile(dtosDir, ".request-dtos.ts");
  const fieldFile = fromFile(fieldsDir, ".fields-and-types.ts");

  if (modFile || dtoFile || fieldFile) {
    parts.push("// ===== Module DTOs =====\n" + modFile);
    if (dtoFile) parts.push("// ===== Request DTOs =====\n" + dtoFile);
    if (fieldFile) parts.push("// ===== Generated Types & Fields =====\n" + fieldFile);

    const outPath = path.join(outputDir, `${module}.ts`);
    fs.writeFileSync(outPath, parts.join("\n\n"), "utf8");
    console.log(`✅ Combined: combined/${module}.ts`);
  }
});
