import process from 'node:process';

const checkIsArg = (arg) => arg[0] === '-' && arg[1] === '-';

const parseArgs = () => {
  const len = process.argv.length;
  let res = '';
  for (let i = 0; i < len; i += 1) {
    const arg = process.argv[i];

    if (checkIsArg(arg)) {
      res += `${arg} is ${process.argv[i + 1]}\n`;
      i += 1;
    }
  }

  console.log(res);
};

parseArgs();
