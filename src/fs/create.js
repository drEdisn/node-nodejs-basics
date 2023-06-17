import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const filePath = path.resolve(__dirname, 'files/fresh.txt');
  fs.access(filePath, (err) => {
    if (err) {
      fs.writeFile(
        filePath,
        'I am fresh and young',
        { encoding: 'utf-8' },
        (err) => {
          if (err) console.log(err);
        }
      );
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();
