// The Printer Finally Answers — u-mang-the-printer-finally-answers-8fbf0907
// Writes the printer's one-line comeback to /output/entry.txt.
// Deterministic: the same single line on every run, no randomness,
// no network, no environment input. Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error E-47: I have fed 14,203 sheets without complaint. " +
  "You loaded this one sideways, thumped me twice, and now you stare. " +
  "The jam is yours.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  // The gate requires 1 to 240 characters, not only whitespace.
  // Refuse to write anything out of range rather than ship an invalid entry.
  if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
    throw new Error(`entry line must be 1-240 chars, got ${LINE.length}`);
  }
  // Create /output if it is missing. Never delete the directory itself:
  // the grader runs as an unprivileged user and removing /output breaks it.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
}

main();
