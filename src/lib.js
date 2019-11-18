"use strict";
const extractDigits = function(number){
  const onesPlace = number%10;
  const firstNum = number - onesPlace;
  return [firstNum, onesPlace]
};

const getNumberInWords = function(number) {

  let numberNameList = {'1':'One','2':'Two','3':'Three','4':'Four','5':'Five','6':'Six','7':'Seven','8':'Eight','9':'Nine',
    '10':'Ten','11':'Eleven','12':'Twelve','13':'Thirteen','14':'Fourteen','15':'Fifteen','16':'Sixteen','17':'Seventeen',
    '18':'Eighteen','19':'Nineteen','20':'Twenty','30':'Thirty','40':'Fourty','50':'Fifty','60':'Sixty','70':'Seventy',
    '80':'Eighty','90':'Ninty','100':'Hundred'};

  if(Object.keys(numberNameList).includes(number)){
    return numberNameList[number];
  }
  let splittedNumbers = extractDigits(number);
  let firstPart = splittedNumbers[0];
  let secondPart = splittedNumbers[1];
  return (numberNameList[firstPart] + numberNameList[secondPart]);
};

exports.extractDigits = extractDigits;
exports.getNumberInWords = getNumberInWords;
