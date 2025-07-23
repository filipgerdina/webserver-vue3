const path = require("path");
const fs = require("fs");
const { Project } = require("ts-morph");

const modulesDir = path.resolve(__dirname, "../api/modules");
const outputDir = path.resolve(__dirname, "../api/generatedTypesAndFields");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const project = new Project();
const files = fs.readdirSync(modulesDir).filter(f => f.endsWith(".ts"));

function normalizeType(typeText) {
  return typeText
    .replace(/import\([^)]+\)\./g, "")
    .replace(/\s*\|\s*null/g, "")
    .trim();
}

function isPrimitive(type) {
  return ["string", "number", "boolean", "any", "unknown"].includes(type);
}

function isArrayType(typeName) {
  return /\[\]$/.test(typeName);
}

function isRecord(type) {
  return /^Record</.test(type);
}

function getArrayElementType(typeName) {
  return typeName.replace(/\[\]$/, "").trim();
}

function generateFieldObject(prop, interfaces, enums, indentLevel = 2, pathSoFar = 'data') {
  const indent = ' '.repeat(indentLevel);
  const propName = prop.getName();
  const rawType = normalizeType(prop.getType().getText());
  const baseType = isArrayType(rawType) ? getArrayElementType(rawType) : rawType;

  const isEnum = enums.find(e => e.getName() === baseType);
  const nestedInterface = interfaces.find(i => i.getName() === baseType);

  const typeStr = isArrayType(rawType)
    ? 'array'
    : isRecord(rawType)
    ? 'object'
    : isEnum
    ? 'string'
    : baseType;

  const fullPath = `${pathSoFar}.${propName}`;

  let lines = [
    `${indent}${propName}: {`,
    `${indent}  _field: "${propName}",`,
    `${indent}  _type: "${typeStr}",`,
    `${indent}  _caption: "s:${propName}",`,
    `${indent}  _translationField: "${fullPath}",`
  ];

  if (nestedInterface) {
    nestedInterface.getProperties().forEach(nestedProp => {
      lines.push(generateFieldObject(nestedProp, interfaces, enums, indentLevel + 2, fullPath));
    });
  }

  lines.push(`${indent}},`);
  return lines.join("\n");
}


files.forEach((filename) => {
  const inputPath = path.join(modulesDir, filename);
  const outputFileName = filename.replace(/\.ts$/, ".fields-and-types.ts");
  const outputPath = path.join(outputDir, outputFileName);

  const sourceFile = project.addSourceFileAtPath(inputPath);
  const interfaces = sourceFile.getInterfaces();
  const enums = sourceFile.getEnums();
  let outputContent = `// Auto-generated from ${filename} for grouped fields and types\n\n`;

  interfaces.forEach((iface) => {
    const name = iface.getName();
    if (!name.endsWith("Response")) return;

    const dataProp = iface.getProperty("data");
    if (!dataProp) return;

    const rawType = normalizeType(dataProp.getType().getText());
    let childType = rawType;
    if (isArrayType(rawType)) childType = getArrayElementType(rawType);

    const dataDTO = interfaces.find((i) => i.getName() === childType);
    if (!dataDTO) return;

    const fieldEntries = dataDTO.getProperties().map((prop) => generateFieldObject(prop, interfaces, enums));

    const objectLines = [
      `export const ${name}Fields = {`,
      ...fieldEntries,
      `} as const;`,
      `\n`
    ];

    outputContent += objectLines.join("\n");
  });

  fs.writeFileSync(outputPath, outputContent, "utf8");
  console.log(`✅ Generated: ${outputPath}`);
});

console.log("🎉 All structured field objects with unlimited nesting and enum handling generated successfully!");
