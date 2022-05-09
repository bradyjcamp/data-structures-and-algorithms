'use strict';

class Vertex {
  constructor(value) {
    this.value =  value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addDirectedEdge(startVertex, endVertex) {
    // find the node we want to connect.

    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return [...this.adjacencyList.keys()];

  }

  getSize(){
    return [...this.adjacencyList.keys()].length;
  }

  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    let current = null;

    while (queue.length) {
      current = queue.pop();

      // do something if we want
      if (cb) cb(current.value);

      // grab neighbors?
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }

    return visited;
  }

  depthFirst(root, cb) {

    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();

      // do something if we want
      if (cb) cb(current.value);

      // grab neighbors?
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }

    return visited;
  }
}

module.exports = {
  Graph,
  Edge,
  Vertex
};

