'use strict';

const { Animal, Cat, Dog, AnimalShelter } = require('../index.js');

describe('testing AnimalShelter', () => {

  test('Should enqueue cat', () => {
    let shelter = new AnimalShelter;
    let dog = new Dog(1);

    shelter.enqueue(dog);
    expect(shelter.length).toEqual(1);
  });
});
