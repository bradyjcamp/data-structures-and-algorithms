# Code Challenge Class 3

## Binary Search for Index

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

NOTE: The search algorithm used in your function should be a binary search

## Whiteboard

![Whiteboard](/javascript/401-code-challenges/array-binary-search/array-binary-search.png)

## Approach & Efficiency

For this challenge I knew I would have to target the center of the array by dividing largest index by 2 and round up. I would then compare that value with parameter. If it was equal then I would return that index. If not I would check if the value was greater than or less than and remove other half of the array and do it again. If it was not in the array then I would return -1
