const minimist = require('minimist');
const fs = require('fs');
const { Transform } = require('stream');
const Path = require('path');

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
    return fs.createReadStream(
      Path.resolve(__dirname, fileName), 'utf-8'
    );
  }
};

const getWritableStream = (fileName) => {
  if (!fileName) {
    return process.stdout;
  } else {
    return fs.createWriteStream(
      Path.resolve(__dirname, fileName), { flags: 'a' });
  }
};
const toEncrypt = new Transform({
  transform(chunk, encoding, callback) {
    this.push(encrypt(chunk.toString(), args.shift, args.action));
    callback();
  }
});

const handleError = (e) => {
  console.error(e.message);
  process.exit(1);
};

getReadableStream(args.input)
  .on('error', function(e){
    handleError(e)
  })
  .pipe(toEncrypt)
  .pipe(getWritableStream(args.output))
  .on('error', function (e) {
    handleError(e)
  });
