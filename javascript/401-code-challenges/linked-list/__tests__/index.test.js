'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {
  let ll = new LinkedList;

  test('Should create an empty linked list', () => {
    expect(ll.head).toEqual(null);
  });

  test('Should insert into a linked list', () => {
    ll.insert('A');

    expect(ll.head.value).toEqual('A');
  });

  test('head should point to first node in linked list', () => {

    expect(ll.head.value).toEqual('A');
    expect(ll.head.next).toEqual(null);
  });

  test('can insert multiple nodes into linked list', () => {
    ll.insert('B');
    ll.insert('C');

    expect(ll.head.value).toEqual('B');
    expect(ll.head.next.value).toEqual('C');
  });

  test('return true when value found within linked list', () => {

    expect(ll.includes('B')).toEqual(true);
  });

  test('return false when value is not found within linked list', () => {

    expect(ll.includes(30000)).toEqual(false);
  });

  test('return a collection of all values that exist in linked list', () => {

    expect(ll.toString()).toEqual('[B] -> [C] -> NULL');
  });

});
