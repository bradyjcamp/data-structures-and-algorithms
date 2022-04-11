'use strict';

const { Dog, AnimalShelter } = require('../index.js');

describe('testing AnimalShelter', () => {

  test('Should enqueue dog', () => {
    let shelter = new AnimalShelter;
    let dog = new Dog(1);

    shelter.enqueue(dog);
    console.log(shelter.shelter.front.value);
    expect(shelter.shelter.front.value).toEqual({'next': null, 'type': 'dog', 'value': 1});
  });
});
