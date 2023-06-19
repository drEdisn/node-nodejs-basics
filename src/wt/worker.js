import { parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on('message', (message) => {
    const start = new Date();
    const value = new TextDecoder().decode(message);
    const data = nthFibonacci(+value);
    const stop = new Date();
    parentPort.postMessage({status: 'resolved', data: data, time: stop - start});
  });
};

sendResult();
