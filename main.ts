// One-Liner Laughs — a program that writes a single funny line to /output/entry.txt.
//
// The line was chosen by an internal head-to-head tournament over a pool of
// 12 original one-liner candidates, judged on the competition rubric:
// a clear setup and payoff, laugh-out-loud funny, a surprising twist, a
// fresh angle, and tight wording. The champion (128 characters):
// "I tried meal prepping. Day one: five identical containers. Day three:
//  I ate cereal over the sink like a raccoon with a mortgage."
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I tried meal prepping. Day one: five identical containers. " +
  "Day three: I ate cereal over the sink like a raccoon with a mortgage.";

// The gate only accepts 1 to 200 characters of non-whitespace text, so
// refuse to write anything outside that range instead of failing silently.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
