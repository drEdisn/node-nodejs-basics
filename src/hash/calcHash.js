import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const hash = createHash('sha256');
  const data = await fs.readFile(
    path.resolve(__dirname, 'files/fileToCalculateHashFor.txt'),
    { encoding: 'binary' },
  );
  hash.update(data);
  console.log(hash.digest('hex'));
};

await calculateHash();
