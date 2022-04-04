# Code Challenge Class 11

## PseudoQueue

Create a PseudoQueue class with methods to fullfil all testing requirements.

## Challenge

- Create a new class called pseudo queue.
  - Do not use an existing Queue.
  - Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
  - Internally, utilize 2 Stack instances to create and manage the queue
    - enqueue()
    - dequeueu()

## Whiteboard

- ![Whiteboard Process](/javascript/401-code-challenges/stack-queue-pseudo/stack-queue-pseudo.png)

## Approach & Efficiency

Instantiated 2 Stacks and feed value through to ensure first in first out order.

- This is an O(n) approach for each.

## API

- `enqueue()`
  - argument: value
  - Inserts value into the PseudoQueue, using a first-in, first-out approach.
- `dequeue()`
  - argument: none
  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.
- `isEmpty()`
  - argument: none
  - Returns: Boolean indicating whether or not the queue or stack is empty

## Solution

- [Code](/javascript/401-code-challenges/stack-queue-pseudo/index.js)
- [Testing](/javascript/401-code-challenges/stack-queue-pseudo/__tests__/index.test.js)

### Checklist

- [x] Create a PseudoQueue Class
- [x] Create all methods for each
- [x] Create all tests
- [x] Pass all tests
