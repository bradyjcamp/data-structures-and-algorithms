'use strict';
const Node = require('../binary-tree/index.js');

class KaryTree{
  constructor(){
    this.root = null;
  }
}

function fizzBuzzTree(tree){
  let newKaryTree = new KaryTree();
  if(!tree.isEmpty()){
    newKaryTree.root = new Node(tree.root.value);

  }
  return newKaryTree.root;
}



// if ( value % 15 === 0 ){
//   return 'FizzBuzz';
// } else if ( value % 3 === 0 ){
//   return 'Fizz';
// } else if ( value % 5 === 0 ){
//   return 'Buzz';
// } else {
//   return value.toString();
// }
