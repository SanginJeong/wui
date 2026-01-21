import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const dist = path.join(root, "dist");
fs.mkdirSync(dist, { recursive: true });

const files = ["tokens.css", "base.css", "typography.css"];

for (const file of files) {
  fs.copyFileSync(path.join(root, "src", file), path.join(dist, file));
}

console.log("wonderui-tokens built:", files.map((f) => `dist/${f}`).join(", "));
