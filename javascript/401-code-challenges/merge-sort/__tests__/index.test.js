'use strict';

const mergeSort = require('../index.js');

describe('Testing mergeSort function', () => {

  test('Should sort an array of integers', () => {
    let arr = [8, 2, 6, 23, 1];
    let newArr = mergeSort(arr);

    expect(newArr).toBe([1, 2, 6, 8, 23]);
  });

  test('Should sort an array of negative integers', () => {
    let arr = [-8, -2, -6, -23, -1];
    let newArr = mergeSort(arr);

    expect(newArr).toBe([-23, -8, -6, -2, -1]);
  });

});
