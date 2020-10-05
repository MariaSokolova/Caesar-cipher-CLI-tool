const fs = require('fs');
const handleError = require('./handleError');

const validation = (args) => {
  const actions = ['encode', 'decode'];
  const isAction = actions.includes(args.action);
  const isShift = args.shift;

  if (args.input) {
    const existsInput = fs.existsSync(args.input);
    if (existsInput === false) {
      handleError(`Error: ${args.input}  wrong path to input file`);
    }
  }

  if (args.output) {
    const existsOutput = fs.existsSync(args.output);
    if (existsOutput === false) {
      handleError(`Error: ${args.output} wrong path to output file`);
    }
  }

  if (!isShift || typeof isShift !== 'number' || isShift < 0) {
    handleError('"-s shift" is required, should be a positive number');
  }

  if (!isAction) {
    handleError('"-a action" is required, valid params are "encode" or "decode"');
  }
};

module.exports = validation;
