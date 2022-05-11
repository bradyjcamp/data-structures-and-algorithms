# Code Challenge Class 37

## Graph Implementation

- This challenge is about the Graph DSA.

## Challenge

- Write a function called business trip
- Arguments: graph, array of city names
- Return: cost or null

## Approach & Efficiency

The Time Complexity  O(N).
The Space Complexity is O(1);

## Solution

- [Code](/javascript/401-code-challenges/graph-business-trip/index.js)
- [Testing](/javascript/401-code-challenges/graph-business-trip/__tests__/index.test.js)

### Checklist


- [x] Create BusinessTrip Function
- [x] Create tests for function
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