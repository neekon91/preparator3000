'use strict';

// returns an array without duplicates
const removeDuplicates = (array) => {
  // your code here
  return new Set(array).toJSON()
};

module.exports = { removeDuplicates };
