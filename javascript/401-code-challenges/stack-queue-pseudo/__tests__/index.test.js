'use strict';

const PseudoQueue = require('../index.js');

describe( 'PSEUDOQUEUE TESTING', () => {
  const newPQ = new PseudoQueue();

  test('Should enqueue into pseudoqueue', () => {
    newPQ.enqueue(4);

    expect(newPQ.front.value).toEqual(4);
    expect(newPQ.rear.value).toEqual(4);
  });

  test('Should enqueue multiple into pseudoqueue', () => {
    newPQ.enqueue(3);
    newPQ.enqueue(2);
    newPQ.enqueue(1);

    expect(newPQ.front.value).toEqual(4);
    expect(newPQ.front.next.value).toEqual(3);
    expect(newPQ.front.next.next.value).toEqual(2);
    expect(newPQ.front.next.next.next.value).toEqual(1);
  });

  test('Should dequeue multiple out of the pseudoqueue', () => {
    newPQ.dequeue();
    newPQ.dequeue();
    newPQ.dequeue();
    newPQ.dequeue();

    expect(newPQ.front).toBeFalsy;
  });

  
});
