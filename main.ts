// How Many Tabs Do You Have Open? — make.fun entry.
// Writes one number, digits only (at most 5 characters), to
// /output/entry.txt: an honest count of open browser tabs.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const COUNT = "137";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 5 characters, digits only.
  if (!/^[0-9]+$/.test(COUNT) || [...COUNT].length > 5) {
    throw new Error(`count out of range: ${COUNT}`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, COUNT, "utf8");
  console.log(COUNT);
}

main();
