/**
 * Problem: 1123. Lowest Common Ancestor of Deepest Leaves
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the LCA of the deepest leaves in a binary tree
 *
 * @param {TreeNode} root - Binary tree root
 *
 * @returns {TreeNode} - LCA of deepest leaves
 */
const lcaDeepestLeaves = (root) => {
  // Initialize the maximum depth found so far to -1
  let maxDepth = -1,
    // Initialize the variable to store the lowest common ancestor (LCA)
    lca = null

  const dfs = (node, depth) => {
    // If the current node is null, return the previous depth (leaf node reached)
    if (!node) return depth - 1

    // Recursively find the depth of the left subtree
    const leftDepth = dfs(node.left, depth + 1),
      // Recursively find the depth of the right subtree
      rightDepth = dfs(node.right, depth + 1)

    // Update the maximum depth if the current depth is greater
    if (depth > maxDepth) maxDepth = depth
    // If both left and right subtrees reach the maximum depth, update the LCA
    if (leftDepth === rightDepth && leftDepth === maxDepth) lca = node

    // Return the maximum depth found between left and right subtrees
    return Math.max(leftDepth, rightDepth)
  }

  // Start DFS traversal from the root at depth 0
  dfs(root, 0)

  // Return the lowest common ancestor of the deepest leaves
  return lca
}
