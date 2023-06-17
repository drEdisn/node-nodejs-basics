import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const data = await fs.readdir(path.resolve(__dirname, 'files'));
    console.log(data);
  } catch(e) {
    throw new Error('FS operation failed');
  }
};

await list();
