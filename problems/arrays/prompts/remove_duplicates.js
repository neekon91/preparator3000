'use strict';

// returns an array without duplicates
const removeDuplicates = array =>
  // your code here
  Object.keys(array.reduce((memo, val)=>{
    memo[val] = val;
    return memo;
  },{})).map(val => Number(val));

module.exports = { removeDuplicates };
