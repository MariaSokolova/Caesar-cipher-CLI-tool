const fs = require('fs');
const Path = require('path');
const { Transform } = require('stream');

const encrypt = require('./caeser-cipher-function');

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

const getEncrypt = (params) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(encrypt(chunk.toString(), params.shift, params.action));
      callback();
    }
  });
};

module.exports = {
  getReadableStream,
  getWritableStream,
  getEncrypt
};
