import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const stream = fs.createReadStream(
    path.resolve(__dirname, 'files/fileToRead.txt'),
    { encoding: 'utf-8' },
  );
  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  })
};

await read();
