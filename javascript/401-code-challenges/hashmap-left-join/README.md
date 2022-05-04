# Code Challenge Class 33

## Hashmap Left Join

- Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge

- Write a function called left join
  - Arguments: two hash maps
    - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
    - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

## Approach & Efficiency

This function has a Time Complexity of O(n)
This function has a Space Complexity of O(1)

## Solution

- [Code](/javascript/401-code-challenges/hashmap-left-join/index.js)
- [Testing](/javascript/401-code-challenges/hashmap-left-join/__tests__/index.test.js)

### Checklist

- [x] Require in a HashTable
- [x] Create function that takes in two hashtables
- [x] Iterate through keys and push values into arr if keys match.
- [x] Create tests for function
- [x] Pass all tests

## API

- `get()`
  - Arguments: key
  - Returns: Value associated with that key in the table
- `contains()`
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.