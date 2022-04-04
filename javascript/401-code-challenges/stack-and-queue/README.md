# Code Challenge Class 10

## Stacks and Queues

Create a Node, Stack, and Queue class with methods to fullfil all testing requirements.

## Challenge

- Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.
  - For the appropriate class implement the following methods and apply appropriate testing
    - push()
    - pop()
    - enqueue()
    - dequeueu()
    - peek()
    - isEmpty()

## Approach & Efficiency

Instantiated a Stack and Queue by creating methods for each and testing expected outcomes.

- This is an O(1) approach for each.

## API

- `push()`
  - argument: value
  - adds a new node with that value to the top of the stack with an O(1) Time performance.
- `pop()`
  - argument: none
  - Returns: the value from node from the top of the stack
  - Removes the node from the top of the stack
  - Should raise exception when called on empty stack
- `enqueue()`
  - argument: value
  - adds a new node with that value to the back of the queue with an O(1) Time performance.
- `dequeue()`
  - argument: none
  - Returns: the value from node from the front of the queue
  - Removes the node from the front of the queue
  - Should raise exception when called on empty queue
- `peek()`
  - argument: none
  - Returns: Value of the node located at the front of the queue or top of the stack
  - Should raise exception when called on empty stack
- `isEmpty()`
  - argument: none
  - Returns: Boolean indicating whether or not the queue or stack is empty

## Solution

- [Code](/javascript/401-code-challenges/stack-and-queue/index.js)
- [Testing](/javascript/401-code-challenges/stack-and-queue/__tests__/index.test.js)

### Checklist

- [x] Create a Node, Stack, and Queue Class
- [x] Create all methods for each
- [x] Create all tests
- [x] Pass all tests
