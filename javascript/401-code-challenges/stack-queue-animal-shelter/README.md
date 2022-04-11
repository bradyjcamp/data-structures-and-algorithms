# Code Challenge Class 12

## Stacks and Queues

Create a class called AnimalShelter which holds only dogs and cats.

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

- `enqueue()`
  - argument: value
  - adds a new node with that value to the back of the queue with an O(1) Time performance.
- `dequeue()`
  - argument: none
  - Returns: the value from node from the front of the queue
  - Removes the node from the front of the queue
  - Should raise exception when called on empty queue

## Solution

- [Code](/javascript/401-code-challenges/stack-queue-animal-shelter/index.js)
- [Testing](/javascript/401-code-challenges/stack-queue-animal-shelter/__tests__/index.test.js)

### Checklist

- [x] Create a Animal, Dog, Cat, and Animal Shelter Class
- [] Create all methods for each
- [] Create all tests
- [] Pass all tests
