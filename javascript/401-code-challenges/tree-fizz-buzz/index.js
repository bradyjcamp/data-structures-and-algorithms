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

function fizzBuzzTree(tree){
  let newKaryTree = new KaryTree();

  let traverse = (originalNode, fizzBuzzNode) => {
    fizzBuzzNode.value = fizzbuzzify(originalNode.value);
    for(let i = 0; i < originalNode.children.length; i++){
      fizzBuzzNode.children[i] = new Node();
      traverse(originalNode.children[i], fizzBuzzNode.children[i]);
    }
  };
  newKaryTree.root = new KaryTree();
  traverse(tree.root, newKaryTree.root, newKaryTree);

  return tree;
}



function fizzbuzzify(value){
  if ( value % 15 === 0 ){
    return 'FizzBuzz';
  } else if ( value % 3 === 0 ){
    return 'Fizz';
  } else if ( value % 5 === 0 ){
    return 'Buzz';
  } else {
    return value.toString();
  }
}

module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree
};
