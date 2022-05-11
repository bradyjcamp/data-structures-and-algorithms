'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
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


  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
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
