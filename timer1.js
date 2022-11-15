const myArgs = process.argv.slice(2);

myArgs.sort(function(a, b) {
  return a - b;
});

for (let i = 0; i < myArgs.length; i++) {
  let delay = myArgs[i] * 1000;
  if (Number(myArgs[i]) >= 0 && !isNaN(Number(myArgs[i]))) {
    setTimeout(() => {
      process.stdout.write('ding ' + myArgs[i] + '      ');
      process.stdout.write('\x07');
    }, delay);
  }
}




