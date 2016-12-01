/**
  * A min stack can push, pop, and get the minimum value of the stack all in constant time.
  * You can assume this stack will take only numbers.
  *
  * For more information on stacks, it is recommended you try the stack prompt first.
  */

'use strict';

class MinStack {
  constructor() {
    // TODO: Implement constructor
    this._stack = [];
  }

  // Push will add an element to the stack
  push(value) {
    // TODO: Implement push method
    let min = this.getMin();
    this._stack.push({
      value: value,
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
    });
  }

  // Pop will remove an element from the stack and return that element
  pop() {
    // TODO: Implement pop method
    if (this.size()) {
      let item = this._stack.pop();
      return item.value;
    }
  }

  // Size returns the size of the stack
  size() {
    // TODO: Implement size method
    return this._stack.length;
  }

  getMin() { // Returns the mininum value in constant time
    // TODO: Implement the getMin method
    if (this.size()) {
      let item = this._stack[this._stack.length - 1];
      return item.min;
    }
  }
}

module.exports = { MinStack };
