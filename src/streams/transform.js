const transform = async () => {
  process.stdin.on('data', (chunk) => {
    const data = chunk.toString();

    let res = '';
    for (let i = data.length - 1; i >= 0; i -= 1) {
      res += data[i]
    }
    process.stdout.write(res + '\n\n');
  });
};

await transform();
