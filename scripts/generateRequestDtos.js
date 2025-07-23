const path = require("path");
const fs = require("fs");
const { Project, SyntaxKind } = require("ts-morph");

const apiDir = path.resolve(__dirname, "../api");
const outputDir = path.resolve(apiDir, "request-dtos");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const project = new Project();
const apiFiles = fs.readdirSync(apiDir).filter(f =>
  f.endsWith(".ts") &&
  !f.startsWith("data-") &&
  !f.startsWith("http") &&
  f !== "request-dtos.ts"
);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

apiFiles.forEach(file => {
  const filePath = path.join(apiDir, file);
  const sourceFile = project.addSourceFileAtPath(filePath);
  const moduleName = path.basename(file, ".ts");

  let output = `// Auto-generated request DTOs for ${moduleName}\n\n`;
  let hasContent = false;

  const classes = sourceFile.getClasses();
  classes.forEach(cls => {
    const classMembers = cls.getMembers();

    classMembers.forEach(member => {
      const name = member.getName?.();
      const arrow = member.getInitializerIfKind?.(SyntaxKind.ArrowFunction);

      if (!name || !arrow) return;

      const params = arrow.getParameters();
      if (!params.length) return;

      const fnName = capitalize(name);
      const prefix = `${capitalize(moduleName)}${fnName}`;

      // === PATH PARAM ===
      const firstParam = params[0];
      const firstType = firstParam.getType().getText();

      if (["string", "number"].includes(firstType)) {
        output += `export interface ${prefix}PathParams {\n  ${firstParam.getName()}: ${firstType};\n}\n\n`;
        hasContent = true;
      }

      // === QUERY PARAM ===
      const queryParam = ["string", "number"].includes(firstType) ? params[1] : firstParam;
      const queryNode = queryParam?.getTypeNode();
      if (queryNode?.getKind() === SyntaxKind.TypeLiteral) {
        const members = queryNode.getMembers();
        const lines = [];

        members.forEach(member => {
          const name = member.getName?.();
          const type = member.getType().getText();
          const isOptional = member.hasQuestionToken?.();
          const docs = member.getJsDocs().map(d => d.getComment()).filter(Boolean);
          const docLine = docs.length ? `  /** ${docs.join(" ")} */\n` : "";

          lines.push(`${docLine}  ${name}${isOptional ? "?" : ""}: ${type};`);
        });

        if (lines.length) {
          output += `export interface ${prefix}Query {\n${lines.join("\n")}\n}\n\n`;
          hasContent = true;
        }
      }
    });
  });

  if (hasContent) {
    const outputPath = path.join(outputDir, `${moduleName}.request-dtos.ts`);
    fs.writeFileSync(outputPath, output, "utf8");
    console.log(`✅ Generated: request-dtos/${moduleName}.request-dtos.ts`);
  }
});
