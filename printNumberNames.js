"use strict";
let getNumberInWords = require('./src/lib.js').getNumberInWords;

const main = function() {
  let inputNum = process.argv[2]; 
  let numberInWords =  getNumberInWords(inputNum);
  console.log(numberInWords); 
};

main();
