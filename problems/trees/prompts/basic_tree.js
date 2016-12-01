'use strict';

/**
  * Implement a basic tree with the methods addChild and contains.
  * Every tree's children should be accessible through .children[]
  * Children should be able to add children directly.
  */

// class Tree {
//   constructor(val) {
//     this._val = val;
//     this._children = [];
//   }
//
//   addChild(val) {
//     // TODO: Add ability to add children
//     let child = new Tee(val);
//     this._children.push(child)
//   }
//
//   contains(target) {
//     // TODO: Add ability to check if value is contained within tree
//     return (this._val === target) ? true : this._children.some(child => child.contains(target));
//   }
// };
function Tree(val){
  this.children = [];
  this.value = val;
}
Tree.prototype.addChild = function(val){
  this.children.push(new Tree(val))
}

Tree.prototype.contains = function(target) {
  return (this.value === target) ? true : this.children.some(child => child.contains(target));
}
module.exports = { Tree };
