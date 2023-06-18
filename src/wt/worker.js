import { workerData, parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const start = new Date();
  const data = Number(workerData);
  let res;
  if (typeof data === 'number' && !Number.isNaN(data)) {
    res = nthFibonacci(data);
  } else {
    throw new Error('Invalid data');
  }
  const stop = new Date();
  parentPort.postMessage({res: res, time: `${stop - start} ms`});
};

sendResult();
