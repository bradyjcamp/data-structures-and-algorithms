'use strict';

const { Queue } = require('../stack-and-queue/index.js');

module.exports = function breadthFirst(tree){

  let current = tree.root;
  let queue = new Queue();
  let arr = [];
  if(current){
    queue.enqueue(current);
  }
  while(!queue.isEmpty()){
    current = queue.dequeue();
    arr.push(current.value);
    if(current.left){
      queue.enqueue(current.left);
    }
    if (current.right){
      queue.enqueue(current.right);
    }
  }
  return arr;

};



