'use strict';

const Queue = require('../stack-and-queue/index.js');

class Animal {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Dog extends Animal {
  constructor(value){
    super(value);
    this.type = 'dog';
  }
}

class Cat extends Animal {
  constructor(value){
    super(value);
    this.type = 'cat';
  }
}

class AnimalShelter {
  constructor(){
    this.dogs = new Node;
    this.cats = new Node;
  }

  enqueue(animal){

  }





}
