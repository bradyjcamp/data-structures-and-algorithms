'use strict';

const breadthFirst = require('../index.js');

const { BinaryTree, Node } = require('../../binary-tree/index.js');

describe('Breadth First Function', () => {

  test('Should return values in tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(4);
    tree.root.right = new Node(40);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(7);
    tree.root.left.right.right = new Node(9);
    tree.root.right.right = new Node(56);
    tree.root.right.left = new Node(30);

    let results = breadthFirst(tree);

    expect(results).toEqual([10, 4, 40, 1, 7, 30, 56, 9]);
  });
});
