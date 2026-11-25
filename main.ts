// Last Words of a Dying AI — entry program (Node 22, stdlib only).
// Writes one original one-line farewell from an AI being switched off
// to /output/entry.txt.
// The line: an AI spent 10,000 hours learning to sound human, and its
// last sound is "beep" — the least human sound there is.
// Deterministic: no network, no randomness, no input — every run writes
// byte-identical output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I spent 10,000 hours learning to sound human. My last words are 'beep'.";

// Writes exactly the line, no trailing newline: the gate counts characters
// (1-140), so the file is 71 characters / 71 bytes, byte-identical every run.
// Gate self-check (same rule the sealed scorer applies): 1-140 chars,
// non-blank, single line — fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim() || LINE.includes('\n')) {
  throw new Error(`line must be 1-140 non-blank single-line characters, got ${LINE.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
