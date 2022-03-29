# Code Challenge Class 1

## Reverse an Array of Numbers

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Whiteboard

![Whiteboard](/javascript/401-code-challenges/array-reverse/array-reverse.png)

## Approach & Efficiency

For this challenge I approached it by looking at it starting from a very high level. There is an array of numbers, and they need to be flipped. Considering we cannot use any built in methods, looping through each index would be the best option. I created a while loop and defined the front index and the end index. Each iteration through the loop, the indexes will swap places and the front will increment while the end decrements. Once the end is greater than front index, stop iterating.
