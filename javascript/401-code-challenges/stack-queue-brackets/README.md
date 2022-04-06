# Code Challenge Class 13

## Stacks and Queues Brackets

- Write a function called validate brackets
  - Arguments: string
  - Return: boolean
    - representing whether or not the brackets in the string are balanced

## Whiteboard

![whiteboard](/javascript/401-code-challenges/stack-queue-brackets/stack-queue-brackets.png)

## Approach & Efficiency

Instantiated 6 Stacks and push according to value at Arr[i]

- This is an O(n) approach using a for loop and is based on size of string input.

## API

- `push()`
  - argument: value
  - adds a new node with that value to the top of the stack with an O(1) Time performance.

## Solution

- [Code](/javascript/401-code-challenges/stack-queue-brackets/index.js)
- [Testing](/javascript/401-code-challenges/stack-queue-brackets/__tests__/index.test.js)

### Checklist

- [x] Create a function that takes in a string
- [x] Split string to create array
- [x] Instantiate 6 empty stack
- [x] Push values according to parameters
- [x] Compare sizes of matching Stacks and return true or false
- [x] Create appropriate testing
- [x] Pass tests
