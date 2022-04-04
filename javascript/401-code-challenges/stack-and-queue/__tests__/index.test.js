'use strict';

const { Stack, Queue } = require('../index.js');

describe('STACK', () => {
  let stack = new Stack();

  test('Stack should be empty', () => {

    expect(stack.top).toEqual(null);
  });

  test('Should raise exception calling pop on empty stack', () => {
    stack.pop();

    expect('Stack is empty already');
  });

  test('Should raise exception calling peek on empty stack', () => {
    stack.peek();

    expect('Stack is empty');
  });

  test('Should successfully push onto a stack', () => {
    stack.push(1);

    expect(stack.top.value).toEqual(1);
  });

  test('Should successfully push multiple onto a stack', () => {
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.top.value).toEqual(4);
    expect(stack.top.next.value).toEqual(3);
    expect(stack.top.next.next.value).toEqual(2);
    expect(stack.top.next.next.next.value).toEqual(1);
  });

  test('Should successfully pop off the stack', () => {
    stack.pop();


    expect(stack.top.value).toEqual(3);
  });

  test('Should successfully empty a stack after multiple pops', () => {
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeFalsy();
  });

  test('Should successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });

});

describe('QUEUE', () => {
  let queue = new Queue();

  test('queue should be empty', () => {

    expect(queue.front).toEqual(null);
  });

  test('Should raise exception calling dequeue on empty queue', () => {
    queue.dequeue();

    expect('Queue is empty already');
  });

  test('Should raise exception calling peek on empty queue', () => {
    queue.peek();

    expect('Queue is empty');
  });

  test('Should successfully enqueue into a queue', () => {
    queue.enqueue(1);

    expect(queue.front.value).toEqual(1);
  });

  test('Should successfully enqueue multiple into a queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.front.next.next.next.value).toEqual(4);
  });

  test('Should successfully dequeue expected value out of a queue', () => {
    queue.dequeue();


    expect(queue.front.value).toEqual(2);
  });

  test('Should successfully empty a queue after multiple dequeue', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeFalsy();
  });

  test('Should successfully peek the next item on the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
  });

});

