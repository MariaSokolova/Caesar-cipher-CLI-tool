const minimist = require('minimist');

const validation = require('./validation');
const handleError = require('./handleError');
const {getReadableStream, getWritableStream, getEncrypt} = require('./streams');

const args = minimist(process.argv.slice(2), {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  }
});

validation(args);

getReadableStream(args.input)
  .on('error', function(e){
    handleError(e.message)
  })
  .pipe(getEncrypt(args))
  .pipe(getWritableStream(args.output))
  .on('error', function (e) {
    handleError(e.message)
  });
