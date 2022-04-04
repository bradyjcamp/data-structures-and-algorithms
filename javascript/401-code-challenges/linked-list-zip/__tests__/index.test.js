'use strict';

const { LinkedList, Node } = require('../index');


describe('LINKED-LIST-ZIP', () => {
  let llA = new LinkedList();
  let llB = new LinkedList();

  it('should return one zipped Linked List if two are given', () => {
    llA.append(1);
    llA.append(2);
    llA.append(3);
    llB.append(4);
    llB.append(5);
    llB.append(6);
    llA.zipList(llA, llB);
    // expect(llA.toString()).toBe('{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> NULL');

  });

  it('Should return zipped Linked List if one is larger than the other', () => {
    llA.append(1);
    llA.append(2);
    llB.append(4);
    llB.append(5);
    llB.append(6);
    llA.zipList(llA, llB);
    // expect(llA.toString()).toBe('{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 6 } -> NULL');
  });
});
