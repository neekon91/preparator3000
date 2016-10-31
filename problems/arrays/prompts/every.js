'use strict';

// determine if every element in the array passes a truth test
const every = (array, truthTest) =>
  // your code here
  array.reduce((test, val)=>
    (test && truthTest(val)) ? true : false , true);

module.exports = { every };
