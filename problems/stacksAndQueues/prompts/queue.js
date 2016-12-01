/**
  * A Queue is a data structure where the entities are stored in a FIFO, or First-in-First-Out
  * order. A queue implementation will be able to "enqueue", or add entities, and "dequeue",
  * or remove entities.
  *
  * For example:
  * myQueue.enqueue(1);
  * myQueue.enqueue(2);
  * myQueue.enqueue(3);
  *
  * myQueue.dequeue(); // => 1
  * myQueue.dequeue(); // => 2
  * myQueue.dequeue(); // => 3
  */

class Queue {
  constructor() {
    this._queue = [];
  }

  // Enqueue will add an element to the queue
  enqueue(value) {
    // TODO: Implement enqueue method
    this._queue.unshift(value)
  }

  // Dequeue will remove an element from the queue and return that element
  dequeue() {
    // TODO: Implement dequeue method
    if(this.size()){
      let remove = this._queue.pop();
      return remove;
    }
  }

  // Size returns the size of the queue
  size() {
    // TODO: Implement size method
    return this._queue.length;
  }
}

module.exports = { Queue };
