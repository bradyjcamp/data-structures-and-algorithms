'use strict';

const { BinarySearchTree } = require('../index.js');


describe('Testing Binary Search Tree', () =>{

  let tree = new BinarySearchTree();
  tree.add(10);

  test('Can instantiate a new BinarySearchTree and add root node if none', () => {

    expect(tree.root.value).toEqual(10);
  });

  test('Should add a left or right child properly to a node', () => {
    tree.add(15);
    console.log(tree);

    expect(tree.root.right).toBeFalsy();
    expect(tree.root.left).toBeFalsy();
  });

  test('Should return true or false for contains method', () => {

    expect(tree.contains(15)).toBeTruthy();
    expect(tree.contains(5)).toBeFalsy();
  });
});
