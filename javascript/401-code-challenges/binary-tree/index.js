'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  preOrder() {

    let results = [];

    let traverse = (node) => {

      // do
      results.push(node.value);

      // where do I go?
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let traverse = (node) => {
      // where do I go?
      if (node.left) traverse(node.left);

      // do
      results.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let traverse = (node) => {
      // where do I go?
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      // do
      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }
}

module.exports = {
  Node,
  BinaryTree
};
