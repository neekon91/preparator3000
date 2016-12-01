'use strict';

/**
  * NOTE: This prompt relies on the tree you developed in basic_tree.
  * If you haven't finished it, this file will not run.
  *
  * Implement the two tree flattening functions, one with a breadth first approach and the other
  * a depth first approach. Make sure you understand the differences.
  *
  *   var testTree =
  *         a
  *        / \
  *       b   c
  *      / \   \
  *     d   e   f
  *
  * Given the above tree:
  * flattenTreeBreadthFirst(testTree); // => ['a', 'b', 'c', 'd', 'e', 'f']
  * flattenTreeDepthFirst(testTree); // => ['a', 'b', 'd', 'e', 'c', 'f']
  */

const flattenTreeBreadthFirst = (tree) => {
  const queue = [tree], sol = [];
  let cur;
  while(queue.length){
    cur = queue.pop();
    cur.children.forEach(child => queue.unshift(child))
    sol.push(cur.value);
  }
  return sol;
};

const flattenTreeDepthFirst = (tree) =>
  tree.children.reduce((memo, child)=> memo.concat(flattenTreeDepthFirst(child)), [tree.value])


module.exports = {
  flattenTreeBreadthFirst,
  flattenTreeDepthFirst
};
