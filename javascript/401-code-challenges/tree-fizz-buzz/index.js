'use strict';

class KaryTree{
  constructor(){
    this.root = null;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(tree) {
  const newTree = new KaryTree();
  newTree.root = new Node();

  const traversal = (originalNode, newNode) => {



    newNode.value = fizzbuzzify(originalNode);

    for (let childIndex in originalNode.children) {
      let childNode = originalNode.children[childIndex];
      let emptyNode = new Node();
      newNode.children[childIndex] = emptyNode;

      traversal(childNode, emptyNode);
    }

  };

  traversal(tree.root, newTree.root);
  return newTree;
}

function fizzbuzzify(node) {
  if(!node){
    return;
  } else if (node.value % 15 === 0) {
    return 'fizzbuzz';
  } else if (node.value % 5 === 0) {
    return 'buzz';
  } else if (node.value % 3 === 0) {
    return 'fizz';
  } else {
    return node.value.toString();
  }
}

module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree
};
