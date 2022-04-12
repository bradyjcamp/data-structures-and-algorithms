'use strict';

const breadthFirst = require('../index.js');

const { BinarySearchTree } = require('../../binary-search-tree/index.js');

describe('Breadth First Function', () => {

  test('Should return values in tree', () => {
    let tree = new BinarySearchTree();
    let arr = [];
    tree.add(5);
    tree.add(10);
    tree.add(15);
    tree.add(20);
    tree.add(25);
    tree.add(30);
    breadthFirst(tree);

    expect(arr).toEqual([5, 15, 10, 20, 25, 30]);
  });
});
