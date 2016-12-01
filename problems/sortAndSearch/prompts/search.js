/**
  * Implement two functions to find the index of the element k in a sorted array of numbers.
  * Both algorithms should take log(n) time.
  *
  * Unsuccessful searches should return -1.
  *
  * For Example:
  * searchIterative([1,2,3,4,5,6], 3); // => 2
  * searchIterative([1,2,3,4,5,6], 9); // => -1
  */


const searchIterative = (nums, k) => {
  // TODO: Implement iterative search
}

const searchRecursive = (nums, k, i = 0) => {
  if(!nums.length || i > nums.length) return -1;
  if(nums[i] === k) return i;
  return searchRecursive(nums, k, i+1)
}

module.exports = { searchIterative, searchRecursive };
