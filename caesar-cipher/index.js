const minimist = require('minimist');
const fs = require('fs');
const { Transform } = require('stream');

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

const getReadableStream = (fileName) => {
  if (!fileName) {
    return process.stdin;
  } else {
    return fs.createReadStream(fileName, 'utf8');
  }
};

const getWritableStream = (fileName) => {
  if (!fileName) {
    return process.stdout;
  } else {
    return fs.createWriteStream(fileName, {flags:'a'});
  }
};
const toEncrypt = new Transform({
  transform(chunk, encoding, callback) {
    this.push(encrypt(chunk.toString(), args.shift, args.action));
    callback();
  }
});

getReadableStream(args.input)
  .pipe(toEncrypt)
  .pipe(getWritableStream(args.output));
