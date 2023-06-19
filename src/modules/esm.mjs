import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const random = Math.random();

let unknownObject;

const getJSONText = async (fileName) => await fs.readFile(
  path.resolve(__dirname, `files/${fileName}.json`),
  { encoding: 'utf-8' }
);

if (random > 0.5) {
  unknownObject = await getJSONText('a');
} else {
  unknownObject = await getJSONText('b');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};

