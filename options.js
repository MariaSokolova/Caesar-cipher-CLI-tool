// const minimist = require('minimist');
// const fs = require('fs');
// const readline = require('readline');
//
//
// const args = minimist(process.argv.slice(2), {
//   alias: {
//     s: 'shift',
//     i: 'input',
//     o: 'output',
//     a: 'action',
//   }
// });
//
// // console.log('args:', args.input);
// // if(args.input){
// //   console.log('yes');
// // } else{
// //   console.log('no');
// // }
//
//
// //
// // fs.appendFile('output.txt', content, 'utf8', err => {
// //   if(err)
// //     throw err;
// //
// //   console.log('Done');
// // });
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// const checkInputFile = (fileName) => {
//   if(!fileName){
//     rl.on('line', (line) => {
//       console.log(`Received: ${line}`);
//     });
//   } else {
//     try{
//       const content = fs.readFileSync(fileName, 'utf8');
//       console.log(content);
//       // exit(0);
//     } catch (e) {
//       console.log('error')
//       //exit(1)
//     }
//
//   }
// };
//
// checkInputFile(args.input);
//
//
