import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const len = os.cpus().length;
  const workers = [];
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    const worker = new Worker(
      path.resolve(__dirname, 'worker.js'),
      { stdin: true },
    );
    worker.on('message', (mess) => console.log(mess));
    worker.on('error', () => console.error({
      status: 'error',
      data: null
    }));
    workers.push(worker);
  }
  console.log('Write numbers to calculate:\n');
  process.stdin.on('data', async (s) => {
    if (count < len) {
      console.log('Worker number: ', workers[count].threadId);
      await workers[count].postMessage(s);
      count += 1;

      if (count === len) {
        count = 0;
      }
    }
  });
};

await performCalculations();
