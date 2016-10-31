'use strict';

// determine if some elements in the array pass a truth test
const some = (array, truthTest) =>
  // your code here
  array.reduce((memo, val)=>
    (!memo && truthTest(val)) ? true : memo, false);

module.exports = { some };
