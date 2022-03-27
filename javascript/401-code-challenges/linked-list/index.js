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

  insert(value){
    let newNode = new Node(value);
    this.head = newNode;
  }

  includes(value){
    let current = this.head;
    while (current !== null){
      if(current.value === value){
        return true;
      } else {
        current = current.next;
      }
    }
    return false;

  }

  toString(){
    let current = this.head;
    let str = '';
    while (current !== null){
      str += `[${current.value}] -> `;
      current = current.next;
    }
    return `${str} NULL`;
  }
}

module.exports= LinkedList;
