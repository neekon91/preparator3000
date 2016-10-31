/**
  * A permutation is an arrangement of members of a set.
  * https://en.wikipedia.org/wiki/Permutation
  *
  * Implement stringPermutation so that it takes two string inputs, and outputs
  * a boolean indicating if on is a permutation of the other. All letters must be included.
  *
  * For instance:
  * stringPermutation('babel', 'lebab') // => true
  * stringPermutation('what', 'wat') // false
  */

const stringPermutation = (string1, string2, outputs = []) => {
  (sub = (left, combo)=>{
    if (left.length < 1) return outputs.push(combo)
    left.map((val, i)=>{
      sub(left.slice(0,i).concat(left.slice(i + 1)), combo + val)
    })
  })([...string1], '')
  return outputs.includes(string2);
};

module.exports = { stringPermutation };
