import cp from 'node:child_process';

const spawnChildProcess = async (args) => {
  const child = cp.fork('./src/cp/files/script.js', args);
  child.on('error', (err) => {
    console.log(err);
  })
};

spawnChildProcess(['sadf', 'asdf', 221]);
