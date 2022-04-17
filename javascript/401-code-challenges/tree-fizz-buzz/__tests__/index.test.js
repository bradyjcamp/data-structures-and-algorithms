'use strict';

const { Node, KaryTree, fizzBuzzTree } = require('../index.js');

describe('Testing KaryTree and FizzBuzz Method', () => {
  let testTree = new KaryTree();
  testTree.root = new Node(150);
  testTree.root.children[0] = new Node(49);
  testTree.root.children[1] = new Node(903);
  testTree.root.children[2] = new Node(13);
  console.log(fizzBuzzTree(testTree.root));

  test('Should replace the value divisable by 3 with “fizz”', () => {
    expect(fizzBuzzTree(testTree.root)).toEqual('fizzbuzz');
  });
});
