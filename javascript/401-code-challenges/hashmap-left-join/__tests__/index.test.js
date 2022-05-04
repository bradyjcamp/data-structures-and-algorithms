'use strict';

const HashTable = require('../../hash-table/index.js');
const leftJoin = require('../index.js');

describe('Testing leftJoin function', () => {

  test('Should merge values to one table if matching keys found', () => {
    let ht1 = new HashTable(1024);
    ht1.set('diligent', 'employed');
    ht1.set('fond', 'enamored');
    ht1.set('guide', 'usher');
    let ht2 = new HashTable(1024);
    ht2.set('diligent', 'idle');
    ht2.set('fond', 'averse');
    ht2.set('guide', 'follow');

    expect(leftJoin(ht1, ht2)).toMatchObject([[ 'diligent', 'employed', 'idle' ], [ 'fond', 'enamored', 'averse' ], [ 'guide', 'usher', 'follow' ]]);
  });

  test('Should not output values that are not in the left tree but are in the right tree', () => {
    let ht1 = new HashTable(1024);
    ht1.set('diligent', 'employed');
    ht1.set('fond', 'enamored');
    ht1.set('guide', 'usher');
    let ht2 = new HashTable(1024);
    ht2.set('diligent', 'idle');
    ht2.set('fond', 'averse');
    ht2.set('guide', 'follow');
    ht2.set('flow', 'jam');
    ht2.set('small', 'large');

    expect(leftJoin(ht1, ht2)).toMatchObject([[ 'diligent', 'employed', 'idle' ], [ 'fond', 'enamored', 'averse' ], [ 'guide', 'usher', 'follow' ]]);
  });
});

