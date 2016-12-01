'use strict';

/**
  * Given an input of a Binary Tree and a integer,
  * return a boolean if the tree contains a path root to leaf that sums to the target.
  *
  * You can assume the Binary Tree will have .left & .right properties.
  *
  * Given the below binary tree and sum of 13:
  *       3
  *      / \
  *     1   2
  *    / \   \
  *   6   9   4
  *
  * Return true, as 3->1->9 = 13
  */

const pathSum = (tree, sum) => {
  let found = false;
  if(tree.left === null && tree.right === null){
    return tree.value - sum === 0;
  }
  if(tree.left){
    if(pathSum(tree.left, sum - tree.value)){
      found = true;
    }
  }
  if(tree.right){
    if(pathSum(tree.right, sum - tree.value)){
      found = true;
    }
  }
  return found;
};

module.exports = { pathSum };
