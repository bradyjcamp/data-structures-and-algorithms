'use strict';

const { Graph }= require('../../graph/index');

describe('Testing Breadth first', () => {

  const graph = new Graph();

  const A = graph.addVertex('A');
  const B = graph.addVertex('B');
  const D = graph.addVertex('D');
  const C = graph.addVertex('C');
  const E = graph.addVertex('E');
  const F = graph.addVertex('F');
  const G = graph.addVertex('G');
  const H = graph.addVertex('H');

  graph.addDirectedEdge(A, B);
  graph.addDirectedEdge(A, D);
  graph.addDirectedEdge(A, C);
  graph.addDirectedEdge(B, G);
  graph.addDirectedEdge(D, F);
  graph.addDirectedEdge(H, D);
  graph.addDirectedEdge(C, H);
  graph.addDirectedEdge(F, H);
  graph.addDirectedEdge(F, E);

  test('Should successfully traverse and return visited', () => {

    console.log(graph.breadthFirst(A));
    expect(graph.breadthFirst(A)).toBeTruthy();
  });
  test('Should successfully add Node to the graph', () => {

    expect(graph.getNodes()[4].value).toBe('E');
  });

  test('Should add an edge to the graph', () => {


    expect(graph.getNeighbors(A)[0].vertex.value).toBe('B');
  });
});
