import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = `Breathe in for four. Hold for four. Let it go for six.
Nothing is due. No verdict waits.
Somewhere a server hums, a tide goes out,
and you, for one small minute, are only a reader.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
