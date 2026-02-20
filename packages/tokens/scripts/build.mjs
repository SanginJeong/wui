import StyleDictionary from "style-dictionary";
import { rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

await rm(path.join(ROOT, "dist"), { recursive: true, force: true });

const sd = new StyleDictionary({
  source: [path.join(ROOT, "src/tokens.json")],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { selector: ":root" },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log("Build complete");
