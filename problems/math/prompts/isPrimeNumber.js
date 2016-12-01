/**
  * A prime number is a number that is only divisible by 1 and itself.
  *
  * Implement isPrimeNumber to check an input number and return a
  * boolean indicating if it is prime or not.
  */

const isPrimeNumber = number => {
  if(number < 2) return false;
  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0) return false;
  }
  return true;
};

module.exports = { isPrimeNumber };
