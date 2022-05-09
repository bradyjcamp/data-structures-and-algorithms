# Code Challenge Class 35

## Graph Implementation

- This challenge is about the Graph DSA.

## Challenge

Implement a Graph Class with the following methods:

- `addVertex()`
- `addDirectedEdge()`
- `getNeighbors()`
- `getNodes()`
- `getSize()`

## Approach & Efficiency

The Time Complexity is all methods besides the traversals is O(1).
The Space Complexity is O(1);

## Solution

- [Code](/javascript/401-code-challenges/graph/index.js)
- [Testing](/javascript/401-code-challenges/graph/__tests__/index.test.js)

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
- `getSize()`
  - Arguments: none
  - Returns the total number of nodes in the graph
  