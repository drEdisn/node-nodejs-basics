import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const len = os.cpus().length;
  const promises = [];
  const results = [];
  let count = 0;

  process.stdin.on('data', async (buff) => {
    const data = buff.toString();
    if (count < len) {
      const promise = new Promise((res, rej) => {
        const worker = new Worker(
          path.resolve(__dirname, 'worker.js'),
          { workerData: data },
        );
        worker.on('message', (mess) => res(mess));
        worker.on('error', (err) => rej(err));
      });
      promise.then((res) => {
        results.push({
          status: 'resolved',
          data: res.res,
          time: res.time,
        });
      }).catch(() => {
        results.push({
          status: 'error',
          data: null
        });
      });
      promises.push(promise);
      count += 1;
      if (count >= len) {
        await Promise.allSettled(promises);
        for (const i of results) {
          console.log(i);
        }
        process.exit();
      }
    }
  });
};

await performCalculations();
