import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const rename = async () => {
  try {
    await fs.rename(
      path.resolve(__dirname, 'files/wrongFilename.txt'),
      path.resolve(__dirname, 'files/properFilename.md')
    );
  } catch(e) {
    throw new Error('FS operation failed');
  }
};

await rename();
