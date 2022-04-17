'use strict';

const { BinaryTree, Node } = require('../index.js');


describe('Testing find max in Binary Tree', () =>{

  test('Should return the highest value in the tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(4);
    tree.root.right = new Node(40);
    expect(tree.maxTree()).toEqual(40);
  });

});
