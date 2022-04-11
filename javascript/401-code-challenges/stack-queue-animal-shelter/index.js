'use strict';

const { Queue } = require('../stack-and-queue/index.js');

class Animal {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Cat extends Animal {
  constructor(value){
    super(value);
    this.type = 'cat';
  }
}
class Dog extends Animal {
  constructor(value){
    super(value);
    this.type = 'dog';
  }
}


class AnimalShelter {
  constructor(){
    this.dogs = new Queue;
    this.cats = new Queue;
    this.shelter = new Queue;
  }

  enqueue(animal){
    if(animal.type === 'cat'){
      this.shelter.enqueue(animal);
    } else if( animal.type === 'dog'){
      this.shelter.enqueue(animal);
    } else {
      console.log('Shelter only has dogs and cats');
    }
  }

  dequeue(pref){
    if(pref === 'dog'){
      let prior = null;
      let frontDog = this.shelter.front;
      while (frontDog.value.type !== 'dog'){
        prior = frontDog;
        frontDog = frontDog.next;
      }
      if (prior !== null){
        prior.next = frontDog.next;
        frontDog.next = null;
        return this.dogs.dequeue();
      }
      this.shelter.dequeue();
      return this.dogs.dequeue();
    } else if(pref === 'cat'){
      let prior = null;
      let frontCat = this.shelter.front;
      while (frontCat.value.type !== 'cat'){
        prior = frontCat;
        frontCat = frontCat.next;
      }
      if (prior !== null){
        prior.next = frontCat.next;
        frontCat.next = null;
        return this.cats.dequeue();
      }
      this.shelter.dequeue();
      return this.cats.dequeue();

    }
  }
}

module.exports = {
  Animal,
  Cat,
  Dog,
  AnimalShelter,
};
