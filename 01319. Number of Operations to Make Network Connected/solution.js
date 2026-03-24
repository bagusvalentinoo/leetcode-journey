/**
 * Problem: 1319. Number of Operations to Make Network Connected
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Minimum number of cables needed to connect all computers
 *
 * @param {number} n - Number of computers
 * @param {number[][]} connections - Array of connections [a, b]
 *
 * @returns {number} Minimum cables needed or -1 if impossible
 */
const makeConnected = (n, connections) => {
  // Union-Find parent array, -1 means node is its own parent
  const parent = Array(n).fill(-1)

  // Initially, we need n-1 connections to connect all computers
  let remainingConnectionsNeeded = n - 1
  // Count of redundant connections (connections that create cycles)
  let redundantConnections = 0

  // Find function with path compression
  const find = (node) => {
    // If node is its own parent, return it
    if (parent[node] === -1) return node

    // Path compression: make the node's parent the root
    parent[node] = find(parent[node])

    // Return the root
    return parent[node]
  }

  // Process each connection
  connections.forEach(([nodeA, nodeB]) => {
    // Find root of both nodes
    const rootA = find(nodeA),
      rootB = find(nodeB)

    // If nodes are in different components, union them
    if (rootA !== rootB) {
      parent[rootB] = rootA
      remainingConnectionsNeeded--
    }
    // If nodes are already connected, this is a redundant connection
    else redundantConnections++
  })

  // If we have enough redundant connections to connect remaining components
  return remainingConnectionsNeeded <= redundantConnections
    ? remainingConnectionsNeeded
    : -1
}
