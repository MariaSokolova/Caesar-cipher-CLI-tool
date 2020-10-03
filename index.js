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

const addToOutputFile = (fileName, content) => {
  if(!fileName){
    console.log(content);
  }else{
    fs.appendFile('output.txt', content , 'utf8', err => {
      if (err)
        throw err;
      console.log('Done');
    });
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
      console.log('Incorrect file name')
    }
  }
};

checkInputFile(args.input);


