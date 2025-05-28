/**
 * Problem: 3372. Maximize the Number of Target Nodes After Connecting Trees I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 149 ms (Beats 100%)
 */

/**
 * Calculates max target nodes when connecting nodes between two trees with a distance limit
 *
 * @param {number[][]} edges1 - First tree edges
 * @param {number[][]} edges2 - Second tree edges
 * @param {number} k - Max distance limit
 *
 * @returns {number[]} Max target nodes for each node in first tree
 */
const maxTargetNodes = (edges1, edges2, k) => {
  // Counts nodes within distance k from given node using DFS
  const dfs = (node, parent, adjacencyList, maxDistance) => {
    // Return 0 if we've exceeded the maximum distance
    if (maxDistance < 0) return 0

    // Start count with current node
    let reachableCount = 1

    // Check all adjacent nodes
    for (const neighbor of adjacencyList[node]) {
      // Skip the parent to avoid cycles
      if (neighbor === parent) continue

      // Add count of reachable nodes from each neighbor
      reachableCount += dfs(neighbor, node, adjacencyList, maxDistance - 1)
    }

    return reachableCount
  }

  // Builds counts of reachable nodes within distance k for all nodes
  const buildReachableCounts = (edges, maxDistance) => {
    // Total number of nodes is edges + 1
    const totalNodes = edges.length + 1
    // Initialize empty adjacency list for each node
    const adjacencyList = Array.from({ length: totalNodes }, () => [])

    // Create undirected graph as adjacency list
    for (const [u, v] of edges) {
      adjacencyList[u].push(v)
      adjacencyList[v].push(u)
    }

    // Array to store reachable node counts
    const reachableCounts = Array(totalNodes)

    // Calculate reachable nodes for each starting node
    for (let nodeIndex = 0; nodeIndex < totalNodes; nodeIndex++)
      reachableCounts[nodeIndex] = dfs(
        nodeIndex,
        -1,
        adjacencyList,
        maxDistance
      )

    return reachableCounts
  }

  // Total number of nodes in the trees
  const totalNodes = edges1.length + 1

  // Count reachable nodes in both trees
  const tree1Counts = buildReachableCounts(edges1, k)
  const tree2Counts = buildReachableCounts(edges2, k - 1)

  // Find maximum count from second tree
  const maxTree2Count = Math.max(...tree2Counts)
  // Initialize result array
  const result = Array(totalNodes)

  // Calculate final result for each node
  for (let nodeIndex = 0; nodeIndex < totalNodes; nodeIndex++)
    result[nodeIndex] = tree1Counts[nodeIndex] + maxTree2Count

  return result
}
