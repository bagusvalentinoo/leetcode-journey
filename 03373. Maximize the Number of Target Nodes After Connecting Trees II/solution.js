/**
 * Problem: 3373. Maximize the Number of Target Nodes After Connecting Trees II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 378 ms (Beats 100%)
 */

/**
 * Returns max target nodes after connecting two trees at each possible node
 *
 * @param {number[][]} edges1 - First tree edges
 * @param {number[][]} edges2 - Second tree edges
 *
 * @returns {number[]} - Max target nodes count for each connection point
 */
const maxTargetNodes = (edges1, edges2) => {
  // Depth-first search to count nodes by color (even/odd depth)
  const dfs = (node, parent, depth, adjacencyList, colorMap) => {
    // Initialize counter for nodes at even depth (0 if depth is odd, 1 if depth is even)
    let evenNodesCount = 1 - (depth % 2)

    // Mark node's color based on depth (0 for even, 1 for odd)
    colorMap[node] = depth % 2

    // Recursively process all neighbors except parent
    for (const neighbor of adjacencyList[node]) {
      if (neighbor === parent) continue

      evenNodesCount += dfs(neighbor, node, depth + 1, adjacencyList, colorMap)
    }

    return evenNodesCount
  }

  // Build adjacency list and calculate counts of each color
  const buildTree = (edges, colorMap) => {
    // Get total number of nodes in the tree
    const totalNodes = edges.length + 1
    // Create empty adjacency list for each node
    const adjacencyList = Array.from({ length: totalNodes }, () => [])

    // Create undirected graph from edges
    for (const [sourceNode, targetNode] of edges) {
      adjacencyList[sourceNode].push(targetNode)
      adjacencyList[targetNode].push(sourceNode)
    }

    // Count nodes at even depth starting from node 0
    const evenDepthCount = dfs(0, -1, 0, adjacencyList, colorMap)

    // Return counts of nodes at even and odd depths
    return [evenDepthCount, totalNodes - evenDepthCount]
  }

  // Get sizes of both trees
  const tree1Size = edges1.length + 1
  const tree2Size = edges2.length + 1

  // Store color (0/1) for each node in both trees
  const colorMap1 = new Array(tree1Size).fill(0)
  const colorMap2 = new Array(tree2Size).fill(0)

  // Get counts of each color for both trees
  const colorCounts1 = buildTree(edges1, colorMap1)
  const colorCounts2 = buildTree(edges2, colorMap2)

  // Calculate result for each possible connection point
  const result = new Array(tree1Size).fill(0)

  // For each node in tree1, calculate max target nodes
  for (let i = 0; i < tree1Size; i++)
    result[i] =
      colorCounts1[colorMap1[i]] + Math.max(colorCounts2[0], colorCounts2[1])

  return result
}
