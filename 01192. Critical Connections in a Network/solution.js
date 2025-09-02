/**
 * Problem: 1192. Critical Connections in a Network
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 191 ms (Beats 100%)
 */

/**
 * Find all critical connections (bridges) in a network
 *
 * @param {number} n - Number of nodes
 * @param {number[][]} connections - List of edges
 *
 * @returns {number[][]} - Critical connections
 */
const criticalConnections = (n, connections) => {
  // Initialize adjacency list for the graph with n nodes
  const adjacencyList = Array.from({ length: n }, () => [])

  // Build the undirected graph from the connections
  for (const [nodeA, nodeB] of connections) {
    adjacencyList[nodeA].push(nodeB)
    adjacencyList[nodeB].push(nodeA)
  }

  // Arrays to store discovery time and lowest reachable time for each node
  const discoveryTime = new Array(n).fill(0)
  const lowestTime = new Array(n).fill(0)

  // Array to collect all critical connections (bridges)
  const bridges = []

  // Timer to assign discovery times to nodes during DFS
  let timer = 0

  // Depth-First Search to find bridges
  const dfs = (currentNode, parentNode) => {
    // Increment timer and assign discovery and lowest time to current node
    timer++
    discoveryTime[currentNode] = lowestTime[currentNode] = timer

    // Traverse all adjacent nodes
    for (const neighbor of adjacencyList[currentNode]) {
      // Skip the parent node to avoid going back in DFS tree
      if (neighbor === parentNode) continue

      // If neighbor is not visited, perform DFS recursively
      if (!discoveryTime[neighbor]) {
        dfs(neighbor, currentNode)

        // Update lowest time for current node after visiting neighbor
        lowestTime[currentNode] = Math.min(
          lowestTime[currentNode],
          lowestTime[neighbor]
        )

        // If the lowest time of neighbor is greater than discovery time of current node, it's a bridge
        if (discoveryTime[currentNode] < lowestTime[neighbor])
          bridges.push([currentNode, neighbor])
      }
      // If neighbor is already visited, update lowest time for current node
      else
        lowestTime[currentNode] = Math.min(
          lowestTime[currentNode],
          discoveryTime[neighbor]
        )
    }
  }

  // Start DFS from each unvisited node to cover disconnected components
  for (let i = 0; i < n; i++) if (!discoveryTime[i]) dfs(i, -1)

  // Return all found bridges (critical connections)
  return bridges
}
