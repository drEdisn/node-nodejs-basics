import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    const data = await fs.readdir(path.resolve(__dirname, 'files'));
    await fs.mkdir(path.resolve(__dirname, 'files_copy'));

    for await (const file of data) {
      await fs.writeFile(
        path.resolve(__dirname, `files_copy/${file}`),
        await fs.readFile(path.resolve(__dirname, `files/${file}`)),
      );
    }

  } catch(e) {
    throw new Error('FS operation failed');
  }
};

await copy();
