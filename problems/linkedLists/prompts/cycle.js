'use strict';

/**
 * Write a function that takes the first node of a singly-linked
 * list which determines if that list has a cycle. A cycle is when
 * a node in the linked list points to another node previous in the
 * list, causing an infinite loop.
 *
 * For example:
 *
 *     [node]->[node]->[node]->[node]
 *                       ^       |
 *                       |       v
 *                     [node]<-[node]
 */

 const hasCycle = (linkedList, pause = true, fast = linkedList) => {
   let slow = linkedList;
   while (fast = fast.next) {
     if (fast === slow) return true;
     slow = pause ? slow : slow.next;
     pause = !pause;
   }
   return false;
 };

module.exports = { hasCycle };
