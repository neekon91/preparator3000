/**
  * A palindrome is a word, phrase, number, or other sequence of characters
  * which reads the same backward or forward.
  *
  * The function longestPalindrome should take a string as an input and find the longest palindrome within it.
  * You may include spaces.
  *
  * For instance:
  * longestPalindrome('dad'); //  => 'dad'
  * longestPalindrome('a'); // => 'a'
  * longestPalindrome('amaryllis sillyrama'); // => 'amaryllis sillyrama'
  */

const longestPalindrome = str => {
  let len = 0, sol = '';
  for(let i = str.length; i > 0; i--){
    for(let z = 0; z <= str.length - i; z++){
      let pal = str.substr(z, i);
      if(pal === [...pal].reverse().join('') && pal.length > len)
        [len, sol] = [pal.length, pal]
    }
  }
  return sol;
}


module.exports = { longestPalindrome };
