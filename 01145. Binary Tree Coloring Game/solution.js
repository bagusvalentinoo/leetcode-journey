/**
 * Problem: 1145. Binary Tree Coloring Game
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if player 2 can win the binary tree game
 *
 * @param {TreeNode} root - Tree root
 * @param {number} n - Total nodes
 * @param {number} x - Chosen node value
 *
 * @returns {boolean} - True if player 2 can win, false otherwise
 */
const btreeGameWinningMove = (root, n, x) => {
  // Initialize result variable to track if player 2 can win
  let res = false

  // Depth-first search helper function to count nodes in subtree
  const dfs = (node) => {
    // Base case: if node is null, return 0
    if (!node) return 0

    // Recursively count nodes in left subtree
    const nodesLeft = dfs(node.left)
    // Recursively count nodes in right subtree
    const nodesRight = dfs(node.right)
    // Total nodes in current subtree (including current node)
    const totalNodesInSubtree = nodesLeft + nodesRight + 1

    // Check if current node is the chosen node x
    if (node.val === x) {
      // Nodes not in the subtree rooted at x (parent side)
      const nodesOutsideSubtree = n - totalNodesInSubtree
      // Find the largest region player 2 can choose (left, right, or parent side)
      const maxRegion = Math.max(nodesLeft, nodesRight, nodesOutsideSubtree)

      // Player 2 wins if their region has more than half the nodes
      res = maxRegion > n - maxRegion
    }

    // Return total nodes in current subtree
    return totalNodesInSubtree
  }

  // Start DFS traversal from root
  dfs(root)

  // Return the result
  return res
}
