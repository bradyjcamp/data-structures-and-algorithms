'use strict';

const { Queue } = require('../stack-and-queue/index.js');

module.exports = function breadthFirst(tree){

  let treeQueue = new Queue();
  let arr = [];

  if(!treeQueue.front){
    treeQueue.enqueue(tree.root);
  }
  while(!treeQueue.isEmpty()){
    let front = treeQueue.dequeue();
    arr.push(front.value);
    if(front.left){
      treeQueue.enqueue(front.left);
    }
    if (front.right){
      treeQueue.enqueue(front.right);
    }
  }
  return arr;

};

