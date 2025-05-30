/**
 * Problem: 2359. Find Closest Node to Given Two Nodes
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 16 ms (Beats 100%)
 */

/**
 * Finds node with minimal maximum distance from both node1 and node2
 *
 * @param {number[]} edges - Directed graph representation
 * @param {number} node1 - First starting node
 * @param {number} node2 - Second starting node
 *
 * @returns {number} - Node index or -1 if none exists
 */
const closestMeetingNode = (edges, node1, node2) => {
  // Get the number of nodes in the graph
  const nodeCount = edges.length

  // Initialize distance arrays for each starting node with -1 (unvisited)
  const distancesFromNode1 = Array(nodeCount).fill(-1),
    distancesFromNode2 = Array(nodeCount).fill(-1)

  // DFS function to calculate distances from a starting node
  const calculateDistances = (startNode, distances) => {
    let currentNode = startNode
    let distance = 0

    // Continue until we reach a leaf node or a previously visited node
    while (currentNode !== -1 && distances[currentNode] === -1) {
      distances[currentNode] = distance++
      currentNode = edges[currentNode]
    }
  }

  // Calculate distances from both starting nodes
  calculateDistances(node1, distancesFromNode1)
  calculateDistances(node2, distancesFromNode2)

  // Track the result node and its minimum maximum distance
  let resultNode = -1
  let minMaxDistance = Infinity

  // Find the node with minimum maximum distance from both starting nodes
  for (let i = 0; i < nodeCount; i++) {
    // Check if node is reachable from both starting nodes
    if (distancesFromNode1[i] !== -1 && distancesFromNode2[i] !== -1) {
      // Get the maximum of the two distances
      const maxDistance = Math.max(distancesFromNode1[i], distancesFromNode2[i])

      // Update result if we found a better candidate
      if (
        maxDistance < minMaxDistance ||
        (maxDistance === minMaxDistance && i < resultNode)
      ) {
        minMaxDistance = maxDistance
        resultNode = i
      }
    }
  }

  return resultNode
}
