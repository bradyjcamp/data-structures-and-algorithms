'use strict';

const repeatedWord = require('../index.js');

describe('Testing repeatedWord function', () => {

  test('Should return null if there are no duplicate words from input', () => {
    let string = 'There are no duplicate words in this sentance';
    expect(repeatedWord(string)).toBeFalsy();
  });

  test('Should return first repeated word from input string', () => {
    let string = 'The first duplicate word in this string is The';
    expect(repeatedWord(string)).toBe('the');
  });

  test('Should return first repeated word regardless of case and ending symbols', () => {
    let string = 'The first duplicate word in this string is THE!';
    expect(repeatedWord(string)).toBe('the');
  });

});
