'use strict';

const { LinkedList, Node } = require('../index');


describe('Linked List', () => {
  let ll = new LinkedList();

  test('Should add a node to the end of a linked list', () => {
    ll.append(1);
    ll.append(2);
    ll.append(3);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next).toBeFalsy();
  });

  test('Should insert a node before a node located in the middle of a linked list', () => {
    ll.insertBefore(2, 10);

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(10);
    expect(ll.head.next.next.value).toEqual(2);
    expect(ll.head.next.next.next.value).toEqual(3);
  });

  test('Should insert a node before a node located at the beginnning of a linked list', () => {
    ll.insertBefore(1, 11);

    expect(ll.head.value).toEqual(11);
    expect(ll.head.next.value).toEqual(1);
    expect(ll.head.next.next.value).toEqual(10);
    expect(ll.head.next.next.next.value).toEqual(2);
  });

  test('Should insert a node after a node located in the middle of a linked list', () => {
    ll.insertAfter(2, 12);

    expect(ll.head.value).toEqual(11);
    expect(ll.head.next.value).toEqual(1);
    expect(ll.head.next.next.value).toEqual(10);
    expect(ll.head.next.next.next.value).toEqual(2);
    expect(ll.head.next.next.next.next.value).toEqual(12);
  });

  test('Should insert a node after a node located at the end of a linked list', () => {
    ll.insertAfter(3, 13);

    expect(ll.head.value).toEqual(11);
    expect(ll.head.next.value).toEqual(1);
    expect(ll.head.next.next.value).toEqual(10);
    expect(ll.head.next.next.next.value).toEqual(2);
    expect(ll.head.next.next.next.next.value).toEqual(12);
    expect(ll.head.next.next.next.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.next.next.next.value).toEqual(13);
  });
});
