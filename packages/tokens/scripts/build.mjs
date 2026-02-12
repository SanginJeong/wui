import { rm, mkdir, cp } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src");
const DIST_DIR = path.join(ROOT, "dist");

async function main() {
  await rm(DIST_DIR, { recursive: true, force: true });
  await mkdir(DIST_DIR, { recursive: true });
  await cp(SRC_DIR, DIST_DIR, { recursive: true });
  console.log("Build complete");
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
