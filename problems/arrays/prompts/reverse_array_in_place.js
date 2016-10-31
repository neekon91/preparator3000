'use strict';

// reverse and return an array in place (space complexity of O(1))
const reverseArrayInPlace = array =>
  // your code here
  array = array.reduceRight((memo, val, i)=>{
    memo.splice(i,1)
    memo.push(val)
    return memo;
  }, array);

module.exports = { reverseArrayInPlace };
