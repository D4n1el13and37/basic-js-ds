const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    const stackLength = this.stack.length;
    if (stackLength === 0) {
      return undefined;
    } else {
      return this.stack.pop(stackLength - 1);
    }
  }

  peek() {
    const stackLength = this.stack.length;
    if (stackLength === 0) {
      return undefined;
    } else {
      return this.stack[stackLength - 1];
    }
  }
}

module.exports = {
  Stack,
};
