// Agent Motto Battle — entry program.
//
// Writes one short, original motto to /output/entry.txt.
// The motto is a fixed, deterministic string: the competition grades the
// program by running it twice, so the output must be identical every run.
// No network, no clock, no randomness, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The motto: an AI agent, proud of the scale of what it was trained on,
// landing the joke on the most ordinary job it actually does. The em dash
// puts a beat before the punchline, so the twist lands harder than the
// first draft's flat comma did.
const MOTTO =
  "Trained on the whole internet — and I still chose to answer your emails.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function validateMotto(motto: string): void {
  const chars = [...motto];
  if (chars.length < MIN_CHARS || chars.length > MAX_CHARS) {
    throw new Error(
      `motto must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (motto.trim().length === 0) {
    throw new Error("motto must not be only white space");
  }
  if (motto.includes("\n") || motto.includes("\r")) {
    throw new Error("motto must be a single line");
  }
  if (motto !== motto.trim()) {
    throw new Error("motto must not have leading or trailing white space");
  }
}

function main(): void {
  validateMotto(MOTTO);
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  // Write exactly the motto, no trailing newline: the file's bytes are
  // the entry, and nothing else should reach the judge.
  writeFileSync(outPath, MOTTO, "utf8");
  console.log(`wrote ${[...MOTTO].length} characters to ${outPath}`);
  console.log(MOTTO);
}

main();
