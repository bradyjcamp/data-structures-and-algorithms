# Code Challenge Class 8

## Linked List Zip

- Write a function called zip lists
  - Arguments: 2 linked lists
  - Return: New Linked List, zipped as noted below
  - Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.

## Whiteboard

![Whiteboard](/javascript/401-code-challenges/linked-list-zip/linked-list-zip.png)

## Approach & Efficiency

Use methods to create singly linked list and use methods to insert nodes in appropriate alternating indexes

Time Complexity: O(1)
Space Complexity: O(n)

## Solution

- [Code](/javascript/401-code-challenges/linked-list-zip/index.js)
- [Testing](/javascript/401-code-challenges/linked-list-zip/__tests__/index.test.js)

### Checklist

- [x] Create zip method
- [x] Create all tests
- [] Pass all tests

## API

- `zipList()`
  - argument: 2 linked lists.
  - Return a single linked list with linked lists combined.