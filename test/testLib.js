"use strict";
const assert = require('assert');
const  extractDigits = require('../src/lib.js').extractDigits;
const  getNumberInWords = require('../src/lib.js').getNumberInWords;

describe("extractDigits",function(){
  it("should extract a number to according to its place values",function(){
    assert.deepStrictEqual(extractDigits(23),[20,3]);
  })
});

describe("getNumberInWords",function(){
  it("should get the number in Words",function(){
    assert.strictEqual(getNumberInWords('12'),'Twelve');
  })
  it("should get the number in Words even it is not in the list",function(){
    assert.strictEqual(getNumberInWords('95'),'NintyFive');
  })

});

