'use strict';

const { Graph }= require('../index.js');

describe('Testing Graph implementation', () => {

  const graph = new Graph();

  const A = graph.addVertex('A');
  const B = graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');

  test('Should successfully add Node to the graph', () => {

    graph.addVertex('E');

    expect(graph.getNodes()[4].value).toBe('E');
  });

  test('Should add an edge to the graph', () => {

    graph.addDirectedEdge(A, B);

    expect(graph.getNeighbors(A)[0].vertex.value).toBe('B');
  });

  test('Should get all nodes in a graph', () => {

    const allNodes = graph.getNodes();

    expect(allNodes).toEqual([{'value': 'A'}, {'value': 'B'}, {'value': 'C'}, {'value': 'D'}, {'value': 'E'}]);
  });

  test('Should get all neighbors from graph', () => {

    const allNeighbors = graph.getNeighbors(A);

    expect(allNeighbors[0].vertex.value).toBe('B');
  });

  test('Should return proper size of graph', () => {

    const size = graph.getSize();

    expect(size).toBe(5);
  });

});


