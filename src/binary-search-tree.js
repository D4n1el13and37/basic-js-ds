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

  remove(data) {
    this.data = removeItem(this.data, data);

    function removeItem(node, value) {
      if (!node) return null;
      if (!node.left && !node.right) {
        return null;
      }

      if (value < node.data) {
        node.left = removeItem(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeItem(node.right, value);
        return node;
      } else {

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        
        let minInRightBranch = node.right; 
        while (minInRightBranch.left) {
          minInRightBranch = minInRightBranch.left;
        }

        node.data = minInRightBranch.data;
        node.right = removeItem(node.right, minInRightBranch.data); 

        return node;
      }
    }
  }

  min() {
    if(!this.data) {
      return;
    }
    let minimal = this.data;

    while(minimal.left) {
      minimal = minimal.left;
    }

    return minimal.data;
  } 

  max() {
    if(!this.data) {
      return;
    }
    let maximal = this.data;

    while(maximal.right) {
      maximal = maximal.right;
    }

    return maximal.data;
  }
}

module.exports = {
  BinarySearchTree,
};
