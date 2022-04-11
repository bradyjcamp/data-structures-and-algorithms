'use strict';

const { BinaryTree, Node } = require('../index.js');


describe('Testing Binary Tree', () =>{

  // let tree = new BinaryTree();

  // tree.root = new Node(10);
  // tree.root.left = new Node(4);
  // tree.root.right = new Node(40);
  // tree.root.left.left = new Node(1);
  // tree.root.left.right = new Node(7);
  // tree.root.left.right.right = new Node(9);
  // tree.root.right.left = new Node(30);
  // tree.root.right.right = new Node(56);

  test('Should instantiate empty tree', () => {
    let tree = new BinaryTree();

    expect(tree.root).toEqual(null);
  });

  test('Should instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);

    expect(tree.root.value).toEqual(10);
  });

  test('Should instantiate empty tree', () => {
    let tree = new BinaryTree();

    expect(tree.root).toEqual(null);
  });

  test('Should return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(4);
    tree.root.right = new Node(40);

    expect(tree.preOrder()).toEqual([10, 4, 40]);
  });

  test('Should return a collection from a inOrder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(4);
    tree.root.right = new Node(40);

    expect(tree.inOrder()).toEqual([4, 10, 40]);
  });

  test('Should return a collection from a postOrder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(4);
    tree.root.right = new Node(40);

    expect(tree.postOrder()).toEqual([4, 40, 10]);
  });

});
