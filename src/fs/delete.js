import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    await fs.rm(path.resolve(__dirname, 'files/fileToRemove.txt'));
  } catch(e) {
    throw new Error('FS operation failed');
  }
};

await remove();
