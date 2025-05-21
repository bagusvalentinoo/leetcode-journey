/**
 * Problem: 979. Distribute Coins in Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns minimum moves needed to distribute coins so each node has exactly one
 *
 * @param {TreeNode} root - Binary tree root
 *
 * @returns {number} - Number of required coin moves
 */
const distributeCoins = (root) => {
  // Track total moves required to distribute coins
  let totalMoves = 0

  // Helper function to perform DFS and calculate excess coins
  const dfs = (node) => {
    if (!node) return 0

    // Get excess coins from left and right subtrees
    const leftExcess = dfs(node.left),
      rightExcess = dfs(node.right)

    // Add absolute excess values to total moves needed
    totalMoves += Math.abs(leftExcess) + Math.abs(rightExcess)

    // Return excess coins from this subtree (current val + children excess - 1 coin needed)
    return node.val + leftExcess + rightExcess - 1
  }

  // Start DFS from the root node
  dfs(root)

  // Return total moves needed to balance coins
  return totalMoves
}
