const minimist = require('minimist');
const fs = require('fs');
const readline = require('readline');

const args = minimist(process.argv.slice(2), {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkInputFile = (fileName) => {
  if(!fileName){
    rl.on('line', (line) => {
      console.log(`Received: ${line}`);
    });
  } else {
    try{
      const content = fs.readFileSync(fileName, 'utf8');
      console.log(content);
    } catch (e) {
      console.log('Incorrect file name')
    }

  }
};

checkInputFile(args.input);
