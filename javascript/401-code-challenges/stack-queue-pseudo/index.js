'use strict';

const { Stack } = require('../stack-and-queue/index.js');


class PseudoQueue {
  constructor(){
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    while(!this.stackOne.isEmpty()){
      let value = this.stackOne.pop();
      this.stackTwo.push(value);
    }
    this.stackOne.push(value);
    this.front = this.stackOne.top;
    this.rear = this.stackOne.top;
    while(!this.stackTwo.isEmpty()){
      let value = this.stackTwo.pop();
      this.stackOne.push(value);
      this.front = this.stackOne.top;
    }
  }


  dequeue(){
    if(this.stackOne.isEmpty()){
      return 'No value in Queue';
    }
    this.front = this.stackOne.top.next;
    if(this.stackOne.top.next === null){
      this.back = null;
    }
    return this.stackOne.pop();
  }

  isEmpty(){
    return (this.front === null);
  }

}

module.exports = PseudoQueue;
