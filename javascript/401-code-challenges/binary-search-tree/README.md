# Code Challenge Class 15

## Binary Tree and Binary Search Tree Implementation

Create a Binary Tree Class and a Binary Search Tree class that extends from the Binary Tree Class

## Challenge

- Create the 2 classes above.
  - For the Binary Tree Class add the following methods
    - preOrder()
    - inOrder()
    - postOrder()
  - For the Binary Search Tree Class add the following methods
    - add()
    - contains()

## Approach & Efficiency

Instantiated a Binary Tree and Binary Search Tree and create methods for each and test expected outcomes.

- This is an O(n) approach for each.

## API

- `add()`
  - Argument: value
  - Adds a new node with that value in the correct location in the binary search tree.
- `contains()`
  - Argument: value
  - Returns: boolean indicating whether or not the value is in the tree at least once.

## Solution

- [Code for Binary Tree](/javascript/401-code-challenges/binary-tree/index.js)
- [Testing for Binary Tree](/javascript/401-code-challenges/binary-tree/__tests__/index.test.js)
- [Code for Binary Search Tree](/javascript/401-code-challenges/binary-search-tree/index.js)
- [Testing for Binary Search Tree](/javascript/401-code-challenges/binary-search-tree/__tests__/index.test.js)

### Checklist

- [x] Create a Binary Tree Class
- [x] Create Binary Search Tree Class that extends from Binary Tree Class
- [x] Create all methods for each
- [x] Create all tests for each
- [x] Pass all tests for each
