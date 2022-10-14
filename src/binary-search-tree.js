const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    // remove line with error and write your code here
    return this.head;
  }

  add(data) {
    // remove line with error and write your code here
    this.head = addInto(this.head, data);

    function addInto(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInto(node.left, data);
      } else {
        node.right = addInto(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    // remove line with error and write your code here
    return searchIn(this.head, data);

    function searchIn(node, data) {

      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }
    }
  }

  find(data) {
    // remove line with error and write your code here
    return searchIn(this.head, data);

    function searchIn(node, data) {

      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }
    }
  }

  remove(data) {
    // remove line with error and write your code here
    this.head = searchIn(this.head, data);

    function searchIn(node, data) {

      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = searchIn(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = searchIn(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = searchIn(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    // remove line with error and write your code here
    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // remove line with error and write your code here
    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
