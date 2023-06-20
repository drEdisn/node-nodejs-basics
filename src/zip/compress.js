import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const gz = zlib.createGzip();
  const inp = fs.createReadStream(path.resolve(__dirname, 'files/fileToCompress.txt'));
  const out = fs.createWriteStream(path.resolve(__dirname, 'files/archive.gz'));
  inp.pipe(gz).pipe(out);
};

await compress();
