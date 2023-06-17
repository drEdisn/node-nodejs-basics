import cp from 'node:child_process';

const spawnChildProcess = async (args) => {
  const child = cp.fork('./src/cp/files/script.js', args, {}, () => {
    child.send('sadf');
  });

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['']);
