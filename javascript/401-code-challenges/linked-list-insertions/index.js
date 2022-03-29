'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  traverse(cb){
    let result;
    let current = this.head;

    while(current !== null){
      result.push(cb(current.value));
      current = current.next;
    }
    return result;
  }

  append(value){
    let newNode = new Node(value);

    if(this.head === null){
      this.head = newNode;
      return this.head;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
    return this.head;
  }

  insertBefore(targetValue, newValue){
    let newNode = new Node(newValue);
    let current = this.head;

    while(current.next.value !== targetValue){
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  insertAfter(targetValue, newValue){
    let newNode = new Node(newValue);
    // let targetNode = {};
    let current = this.head;

    while(current.value !== targetValue){
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
}


module.exports={
  LinkedList,
  Node,
};
