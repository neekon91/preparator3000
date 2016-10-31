'use strict';

// flatten a nested array into a flat (1D) array
const flatten = arrays =>
	// your code here
  arrays.reduce((memo, val)=>
    memo.concat(Array.isArray(val) ? flatten(val) : val),[]);

module.exports = { flatten };
