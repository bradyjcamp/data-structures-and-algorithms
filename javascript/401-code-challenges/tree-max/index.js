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
  
  maxTree(){
    let max = 0;
    let traverse = (node) => {
      if(!node){
        return;
      }else if (node.value > max){
        max = node.value;
      }
      // where do I go?
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return max;
  }
}

module.exports = {
  Node,
  BinaryTree
};
