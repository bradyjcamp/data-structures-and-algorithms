# Code Challenge Class 30

## Hash Table Implementation

- This challenge is about hash tables. It is designed to implement a Hash Table class and include methods in the class and create ample testing.

## Challenge

Implement a Hashtable Class with the following methods:

- `set()`
- `get()`
- `contains()`
- `hash()`

## Approach & Efficiency

The `set()`, and `hash()` methods are O(1) Time Complexity because they allow for direct access to the data we are searching for without iterating through the entire list. They are O(n) Space Complexity.

`contains()`, and `get()` methods are O(n) Time Complexity becasue they iterate through the linked list at each bucket and the size of the linked list plays a factor. They are O(1) Space Complexity.

## Solution

- [Code](/javascript/401-code-challenges/hash-table/index.js)
- [Testing](/javascript/401-code-challenges/hash-table/__tests__/index.test.js)

### Checklist

- [x] Create HashTable class
- [x] Create all methods
- [x] Create tests for each method
- [x] Pass all tests

## API

- `set()`
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
- `get()`
  - Arguments: key
  - Returns: Value associated with that key in the table
- `contains()`
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- `hash()`
  - Arguments: key
  - Returns: Index in the collection for that key