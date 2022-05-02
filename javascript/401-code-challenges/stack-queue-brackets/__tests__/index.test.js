'use strict';

const validateBrackets = require('../index.js');

describe('BRACKETS VALIDATOR', () => {
  test('Should return true if brackets have closers or false if not', () => {
    let approved = validateBrackets('[]{}()');
    let denied = validateBrackets('{{}]](');

    expect(approved).toBeTruthy;
    expect(denied).toBeFalsy;
  });
});
