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
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
    current.next.next = null;
  }

  insertBefore(targetValue, newValue){
    let newNode = new Node(newValue);
    let current = this.head;
    console.log(current);
    if(this.head === targetValue){
      newNode.next = this.head;
      this.head = newNode;
    }

    while(current.next.value !== targetValue){
      current = current.next;
    }
    let temp = current.next;
    current.next = newNode;
    current.next.next = temp;

  }

  insertAfter(targetValue, newValue){
    let newNode = new Node(newValue);

    let current = this.head;

    while(current.value !== targetValue){
      current = current.next;
    }
    let temp = current.next;
    current.next = newNode;
    current.next.next = temp;
  }

  toString(){
    let current = this.head;
    let str = '';
    while (current !== null){
      str += `[${current.value}] -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }
}


module.exports={
  LinkedList,
  Node,
};
