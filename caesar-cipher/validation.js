const fs = require('fs');

const validation = (args) => {
  const actions = ['encode', 'decode'];
  const isAction = actions.includes(args.action);
  const isShift = args.shift;

  if(args.input){
    const existsInput = fs.existsSync(args.input);
    if (existsInput === false) {
      console.error(`Error: ${args.input}  wrong path to input file`);
      process.exit(1);
    }
  }

  if(args.output){
    const existsOutput = fs.existsSync(args.output);
    if (existsOutput === false) {
      console.error(`Error: ${args.output} wrong path to output file`);
      process.exit(1);
    }
  }

  if (!isShift || typeof isShift !== 'number' || isShift < 0 ) {
    console.error('"-s shift" is required, should be a positive number');
    process.exit(1);
  }

  if (!isAction) {
    console.error('"-a action" is required, valid params are "encode" or "decode"');
    process.exit(1);
  }
};

module.exports = validation;
