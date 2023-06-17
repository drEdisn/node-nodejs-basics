import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, 'files/fileToRead.txt'), { encoding: 'utf-8' });
    console.log(data);
  } catch(e) {
    throw new Error('FS operation failed');
  }
};

await read();
