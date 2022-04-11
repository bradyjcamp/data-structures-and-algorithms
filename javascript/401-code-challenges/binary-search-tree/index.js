'use strict';

const { BinaryTree, Node } = require('../binary-tree/index.js');


class BinarySearchTree extends BinaryTree{
  constructor(){
    super();
  }

  add(value){
    if(!this.root){
      this.root = new Node(value);
      return;
    }
    while(this.root){
      if(this.root.value > value){
        if(!this.root.left){
          this.root.left = new Node(value);
        } else {
          this.root =this.root.left;
          return;
        }
      } else if(this.root.value < value){
        if(!this.root.right){
          this.root.right = new Node(value);
        } else {
          this.root =this.root.right;
          return;
        }
      }
    }
  }

  contains(value){
    while(this.root){
      if(this.root.value === value){
        return true;
      }
      if(this.root.value > value){
        if(!this.root.left){
          return false;
        } else {
          this.root = this.root.left;
        }
      } else if(this.root.value < value){
        if(!this.root.right){
          return false;
        } else {
          this.root = this.root.right;
        }
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
  Node
};
