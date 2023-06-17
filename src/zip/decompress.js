import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const gz = zlib.createUnzip();
  const inp = fs.createReadStream(path.resolve(__dirname, 'files/archive.gz'));
  const out = fs.createWriteStream(path.resolve(__dirname, 'files/fileToCompress.txt'), { encoding: 'utf-8' });
  inp.pipe(gz).pipe(out);
};

await decompress();
