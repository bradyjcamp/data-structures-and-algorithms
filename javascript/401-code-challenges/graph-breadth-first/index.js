'use stict';

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
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

}

module.exports = {
  Graph,
};
