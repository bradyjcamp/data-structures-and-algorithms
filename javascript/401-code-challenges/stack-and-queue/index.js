'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  traverse(top){
    let current = top;

    while(current){
      current = current.next;
    }
  }

  push(value){
    let newNode = new Node(value);
    let temp = this.top;
    newNode.next = temp;
    this.top=newNode;
  }

  pop(){
    if(!this.isEmpty()){
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp.value;
    } else {
      return 'Stack is empty already';
    }
  }

  peek(){
    if(!this.isEmpty()){
      return this.top.value;
    } else {
      return 'Stack is empty';
    }
  }

  isEmpty(){
    return (this.top === null);
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  traverse(front){
    let current = front;

    while(current){
      current = current.next;
    }
  }

  enqueue(value){
    let newNode = new Node(value);
    if (!this.isEmpty()){
      this.rear.next = newNode;
    } else {
      this.front = newNode;
    }
    this.rear = newNode;
  }

  dequeue(){
    if (this.isEmpty()){
      return 'Queue is empty already';
    }
    let temp = this.front;
    this.front = temp.next;
    if (!temp.next) {
      this.rear = null;
    }
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(!this.isEmpty()){
      return this.front.value;
    } else {
      return 'Queue is empty';
    }
  }

  isEmpty(){
    return (this.front === null);
  }

}

module.exports={
  Stack,
  Queue,
};
