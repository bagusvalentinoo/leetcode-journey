/**
 * Problem: 1022. Sum of Root To Leaf Binary Numbers
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the sum of all root-to-leaf binary numbers in a binary tree
 *
 * @param {TreeNode} root - The root of the binary tree
 *
 * @returns {number} - The sum of all binary numbers formed by root-to-leaf paths
 */
const sumRootToLeaf = (root) => {
  // Performs depth-first traversal to accumulate binary values
  const dfs = (node, currentValue) => {
    if (!node) return 0

    // Left shift current value and add current node's bit
    const newValue = (currentValue << 1) | node.val
    // If leaf node, return the accumulated binary value
    if (!node.left && !node.right) return newValue

    // Recursively process left and right subtrees
    return dfs(node.left, newValue) + dfs(node.right, newValue)
  }

  return dfs(root, 0)
}
