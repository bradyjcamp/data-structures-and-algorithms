# Code Challenge Class 31

## Hashmap Repeated Word

- This challenge is about using a hash map to determine whether or not there is a duplicate word in the string entered.

## Challenge

Write a function called repeated word that finds the first word to occur more than once in a string.

## Approach & Efficiency

This function has a Time Complexity of O(n) because we have to iterate through the array of words after splitting them.
This function has a Space Complexity of O(1)

## Solution

- [Code](/javascript/401-code-challenges/hashmap-repeated-word/index.js)
- [Testing](/javascript/401-code-challenges/hashmap-repeated-word/__tests__/index.test.js)

### Checklist

- [x] Require in a HashTable
- [x] Create a regex variable that captures all symbols
- [x] Replace symbols with blank spaces.
- [x] Interate through For loop
- [x] Add conditional logic and return appropriate value.
- [x] Create tests for function
- [x] Pass all tests

## API

- `set()`
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
- `contains()`
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.