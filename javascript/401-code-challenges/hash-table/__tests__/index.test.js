'use strict';

let HashTable = require('../index.js');

describe('Testing methods of a HashTable', () => {
  let table = new HashTable(1024);

  test('Should be able to set a key/value into the data structure', () => {
    table.set('Brady', 26);

    expect(table.buckets[318].head.value).toMatchObject({'Brady': 26});
  });

  test('Should retrieve a value stored based on the key searched', () => {

    expect(table.get('Brady')).toBe(26);
  });

  test('Should return null if key searched does not exist', () => {

    expect(table.get('nothing')).toBe(null);
  });

  test('Should successfully handle a collision by adding a node to the LinkedList in the bucket', () => {
    table.set('Rabyd', 31);

    expect(table.buckets[318].head.next.value).toMatchObject({'Rabyd': 31});
  });

  test('Should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {


    expect(table.get('Rabyd')).toBe(31);
  });

  test('Should successfully hash a key to an in-range value', () => {

    expect(table.hash('Taylor') < 1024).toBeTruthy();
    expect(table.hash('John') < 1024).toBeTruthy();
    expect(table.hash('Reggie') < 1024).toBeTruthy();
  });
});
