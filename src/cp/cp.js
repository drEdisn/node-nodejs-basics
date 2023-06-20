import cp from 'node:child_process';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const child = cp.spawn('node', [path.resolve(__dirname, 'files/script.js'), ...args]);
  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  process.stdin.pipe(child.stdin);

  // Second Solution

  // const child = cp.fork('./src/cp/files/script.js', args);
  // child.on('error', (err) => {
  //   console.log(err);
  // });
};

spawnChildProcess(['sadf', 'asdf', 221]);
