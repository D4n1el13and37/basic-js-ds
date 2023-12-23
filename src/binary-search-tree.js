const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
    return this.data;
  }

  add(data) {
    this.data = addBranch(this.data, data);

    function addBranch(node, value) {
      if (!node) return new Node(value);

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addBranch(node.left, value);
      } else {
        node.right = addBranch(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return hasValue(this.data, data);

    function hasValue(node, value) {
      if (!node) return false;
      if (node.data === value) return true;

      return value < node.data
        ? hasValue(node.left, value)
        : hasValue(node.right, value);
    }
  }

  find(data) {
    return searchNode(this.data, data);

    function searchNode(node, value) {
      if (!node) return null;
      if (node.data === value) return node;

      return value < node.data
        ? searchNode(node.left, value)
        : searchNode(node.right, value);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
