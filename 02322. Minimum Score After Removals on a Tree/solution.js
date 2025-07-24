/**
 * Problem: 2322. Minimum Score After Removals on a Tree
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 96 ms (Beats 100%)
 */

/**
 * Returns the difference between the largest and smallest of three numbers
 *
 * @param {number} part1 - The first part of the calculation
 * @param {number} part2 - The second part of the calculation
 * @param {number} part3 - The third part of the calculation
 *
 * @returns {number} - The maximum difference between the largest and smallest of the three parts
 */
const calc = (part1, part2, part3) =>
  Math.max(part1, Math.max(part2, part3)) -
  Math.min(part1, Math.min(part2, part3))

/**
 * Finds the minimum score after removing two edges from a tree
 *
 * @param {number[]} nums - Node values
 * @param {number[][]} edges - Tree edges [u, v]
 *
 * @returns {number} - Minimum score
 */
const minimumScore = (nums, edges) => {
  // Number of nodes in the tree
  const nodeCount = nums.length

  // Adjacency list to represent the tree
  const adjacencyList = Array.from({ length: nodeCount }, () => [])

  // Build the adjacency list from the edges
  for (const [u, v] of edges) {
    adjacencyList[u].push(v)
    adjacencyList[v].push(u)
  }

  // Arrays to store subtree XOR sums, entry times, and exit times for each node
  const subtreeXorSum = new Array(nodeCount).fill(0),
    entryTime = new Array(nodeCount).fill(0),
    exitTime = new Array(nodeCount).fill(0)
  let timeCounter = 0

  // Helper function to perform DFS and calculate subtree XOR sums
  const dfs = (currentNode, parentNode) => {
    // Record entry time for current node
    entryTime[currentNode] = timeCounter++
    // Initialize subtree XOR sum with current node's value
    subtreeXorSum[currentNode] = nums[currentNode]

    // Traverse all adjacent nodes
    for (const neighbor of adjacencyList[currentNode]) {
      // Skip the parent node to avoid revisiting
      if (neighbor === parentNode) continue

      // Recursively visit child nodes
      dfs(neighbor, currentNode)
      // Update subtree XOR sum with child's subtree XOR sum
      subtreeXorSum[currentNode] ^= subtreeXorSum[neighbor]
    }

    // Record exit time for current node
    exitTime[currentNode] = timeCounter
  }

  // Start DFS traversal from root node (node 0)
  dfs(0, -1)

  // Initialize result with infinity for minimum score comparison
  let minScore = Infinity

  // Iterate over all pairs of nodes to consider removing two edges
  for (let firstNode = 1; firstNode < nodeCount; firstNode++) {
    for (let secondNode = firstNode + 1; secondNode < nodeCount; secondNode++) {
      //
      // Case 1: secondNode is in the subtree of firstNode
      if (
        entryTime[secondNode] > entryTime[firstNode] &&
        entryTime[secondNode] < exitTime[firstNode]
      )
        minScore = Math.min(
          minScore,
          calc(
            subtreeXorSum[0] ^ subtreeXorSum[firstNode],
            subtreeXorSum[firstNode] ^ subtreeXorSum[secondNode],
            subtreeXorSum[secondNode]
          )
        )
      //
      // Case 2: firstNode is in the subtree of secondNode
      else if (
        entryTime[firstNode] > entryTime[secondNode] &&
        entryTime[firstNode] < exitTime[secondNode]
      )
        minScore = Math.min(
          minScore,
          calc(
            subtreeXorSum[0] ^ subtreeXorSum[secondNode],
            subtreeXorSum[secondNode] ^ subtreeXorSum[firstNode],
            subtreeXorSum[firstNode]
          )
        )
      //
      // Case 3: firstNode and secondNode are in different subtrees
      else
        minScore = Math.min(
          minScore,
          calc(
            subtreeXorSum[0] ^
              subtreeXorSum[firstNode] ^
              subtreeXorSum[secondNode],
            subtreeXorSum[firstNode],
            subtreeXorSum[secondNode]
          )
        )
    }
  }

  // Return the minimum score found
  return minScore
}
