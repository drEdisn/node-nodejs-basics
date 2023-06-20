import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const stream = fs.createWriteStream(
    path.resolve(__dirname, 'files/fileToWrite.txt'),
    { encoding: 'utf-8' },
  );
  process.stdin.on('data', (data) => {
    stream.write(data);
  });
};

await write();
