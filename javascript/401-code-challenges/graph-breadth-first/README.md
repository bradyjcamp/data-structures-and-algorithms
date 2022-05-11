# Code Challenge Class 36

## Breadth First Traversal

- This challenge is about the breadth first traversal on a graph

## Challenge

Write the following method for the Graph class:

- breadth first
- Arguments: Node
- Return: A collection of nodes in the order they were visited.
- Display the collection

## Approach & Efficiency

The Time Complexity is O(N).
The Space Complexity is O(1);

## Solution

- [Code](/javascript/401-code-challenges/graph-breadth-first/index.js)
- [Testing](/javascript/401-code-challenges/graph-breadth-first/__tests__/index.test.js)

### Checklist

- [x] Create Graph class
- [x] Create all methods
- [x] Create tests for each method
- [x] Pass all tests

## API

- `addVertex()`
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- `addDirectedEdge()`
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- `getNeighbors()`
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
