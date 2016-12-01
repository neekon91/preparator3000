'use strict';

/**
  * Implement a basic tree with the methods addChild and contains.
  * Every tree's children should be accessible through .children[]
  * Children should be able to add children directly.
  */

class Tree {
  constructor(val) {
    this._val = val;
    this._left = null;
    this._right = null;
  }

  addChild(val) {
    // TODO: Add ability to add children
    if(!this._left){
      this._left = new Tree(val);
    }
    if(!this._right){
      this._right = new Tree(val);
    }
  }

  contains() {
    // TODO: Add ability to check if value is contained within tree
  }
};

module.exports = { Tree };
