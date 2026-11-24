import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, exactly as pitched: a sock-matching subscription nobody needs.
const line = "An app that matches your lonely left socks with other people's lonely right socks — $4.99 a month, socks sold separately.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
