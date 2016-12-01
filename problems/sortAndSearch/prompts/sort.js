/**
  * Implement a function that sorts and returns an array of numbers.
  * Your algorithm should have n*log(n) time complexity.
  *
  * Some acceptable strategies include: quicksort, mergesort, heapsort
  * Bonus for sorting in place.
  */

const sort = numbers => {
  let left = [], right = [];
  if(numbers.length < 2) return numbers;
  for(let i = 1; i < numbers.length; i++){
    (numbers[0] > numbers[i]) ? left.push(numbers[i]) : right.push(numbers[i]);
  }
  return sort(left).concat(numbers[0], sort(right));
}

module.exports = { sort };
