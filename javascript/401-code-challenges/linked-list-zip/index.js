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



  zipList(llA, llB){
    let currentListA = llA.head;
    let currentListB = llB.head;
    let nextA = {};
    let nextB = {};
    while (currentListA.next){
      if (!currentListB.next){
        currentListB.next = currentListA;
        return llA;
      }else {
        nextA = currentListA.next;
        currentListA.next = currentListB;
        nextB = currentListB.next;
        currentListB.next = nextA;
        currentListB = nextB;
        currentListA = nextA;
        if(!currentListA.next){
          currentListA.next = currentListB;
          return llA;
        }
      }
    }
    if (!currentListA.next && !currentListB.next){
      currentListA.next = currentListB;
    }
    return llA;
  }

}

module.exports={
  LinkedList,
  Node,
};
