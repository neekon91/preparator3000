'use strict'
/**
  * Implement a method to perform basic string compression using the counts of repeated characters.
  * If the ‘compressed’ string would not become smaller than the original string,
  * your method should return the original string.
  *
  * For example:
  * stringCompression('aabbbcddd') // => 'a2b3c1d3'
  * stringCompression('c') // => 'c'
  */



const stringCompression = string => {
  if (!string) {
    return string;
  }

  let output = '';
  for (let i = 0; i < string.length; i++) {
      let beg = i;
    while (i + 1 < string.length && string[beg] === string[i + 1]) {
      i++;
    }
    output +=  string[beg] + (i - beg + 1);
  }

  return (output.length < string.length) ? output : string;
};

module.exports = { stringCompression };
