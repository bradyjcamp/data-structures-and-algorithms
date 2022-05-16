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
    this.count=0;

  }

  traverse(){
    let result = [];
    let current = this.head;

    while(current){
      result.push(current.value);
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

    if(this.head !== targetValue){
      while(current.next.value !== targetValue){
        current = current.next;
      }
      let temp = current.next;
      current.next = newNode;
      current.next.next = temp;
    } else{
      newNode.next = this.head;
      this.head = newNode;
    }

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
    while (current){
      str += `[${current.value}] -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }


  kthMethod(k) {

    let list = [];
    let current = this.head;
    if (k < 0) {
      return null;
    }
    while (current) {
      list.unshift(current.value);
      current = current.next;
    }
    if (k > list.length - 1) {
      return null;
    }
    return list[k];
  }


}

let ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
console.log(ll.kthMethod(5));


module.exports={
  LinkedList,
  Node,
};
