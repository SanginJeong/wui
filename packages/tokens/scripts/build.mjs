import StyleDictionary from "style-dictionary";
import { rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

await rm(path.join(ROOT, "dist"), { recursive: true, force: true });

function shadowToCSS(shadow) {
  const { x, y, blur, spread, color } = shadow;
  return `${x} ${y} ${blur} ${spread} ${color}`;
}

const sd = new StyleDictionary({
  source: [path.join(ROOT, "src/tokens.json")],
  hooks: {
    transforms: {
      "shadow/css": {
        type: "value",
        filter: (token) => token.$type === "boxShadow",
        transform: (token) => {
          const val = token.$value;
          if (Array.isArray(val)) {
            return val.map(shadowToCSS).join(", ");
          }
          return shadowToCSS(val);
        },
      },
    },
  },
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "html/icon",
        "size/rem",
        "color/css",
        "asset/url",
        "fontFamily/css",
        "cubicBezier/css",
        "strokeStyle/css/shorthand",
        "border/css/shorthand",
        "typography/css/shorthand",
        "transition/css/shorthand",
        "shadow/css",
      ],
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
console.log("Build complete: dist/tokens.css");
