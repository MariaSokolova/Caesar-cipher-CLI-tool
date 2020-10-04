const minimist = require('minimist');
const fs = require('fs');
const readline = require('readline');

const encrypt = require('./caeser-cipher-function');
const validation = require('./validation');

const args = minimist(process.argv.slice(2), {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  }
});

validation(args);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addToOutputFile = (fileName, content) => {
  const res = encrypt(content, args.shift, args.action);
  if (!fileName) {
    console.log(res);
  } else {
    try {
      fs.appendFile(fileName, res, 'utf8', err => {
        if (err)
          throw err;
        console.log('Message was encrypted and added to the output file');
        process.exit(1);
      });
    } catch (e) {
      console.error(`${fileName} is a wrong name of output file`);
      process.exit(1);
    }
  }
};

const checkInputFile = (fileName) => {
  if (!fileName) {
    rl.on('line', (line) => {
      addToOutputFile(args.output, line + '\n');
    });
  } else {
    try {
      const content = fs.readFileSync(fileName, 'utf8');
      addToOutputFile(args.output, content);
    } catch (e) {
      console.error(`${fileName} is a wrong name of input file`);
      process.exit(1);
    }
  }
};

checkInputFile(args.input);


