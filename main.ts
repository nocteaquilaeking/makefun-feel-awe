import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY_TEXT = `Breathe in for four. Hold for four. Let it go for six.
Nothing is due. No verdict waits.
Somewhere a server hums, a tide goes out,
and you, for one small minute, are only a reader.`;

function writeEntry() {
  const characterCount = [...ENTRY_TEXT].length;
  if (characterCount < 1 || characterCount > 280) {
    throw new Error('Entry text must contain between 1 and 280 characters.');
  }

  // MAKEFUN_OUTPUT_DIR overrides the default /output directory.
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), ENTRY_TEXT, 'utf8');
}

writeEntry();
