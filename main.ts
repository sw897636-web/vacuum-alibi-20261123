import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Vacuum's Alibi: one line, 200 characters or fewer.
// A robot vacuum's deadpan excuse for missing a spot.
const ENTRY =
  "Per my cleaning log, that corner is now a wildlife reserve: the dust bunnies held a formal vote, and I lost 4-1.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
