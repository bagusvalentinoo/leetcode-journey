/**
 * Problem: 1080. Insufficient Nodes in Root to Leaf Paths
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Prunes a binary tree, keeping only nodes on root-to-leaf paths with sums >= limit
 *
 * @param {TreeNode} root - Binary tree root
 * @param {number} limit - Minimum path sum
 *
 * @returns {TreeNode} - Pruned tree root
 */
const sufficientSubset = (root, limit) => {
  // Subtract the current node's value from the limit for the path sum
  limit -= root.val

  // If the node is a leaf, check if the remaining limit is positive
  // If so, prune (return null); otherwise, keep the leaf node
  if (!root.left && !root.right) return limit > 0 ? null : root

  // Recursively prune the left subtree if it exists
  if (root.left) root.left = sufficientSubset(root.left, limit)

  // Recursively prune the right subtree if it exists
  if (root.right) root.right = sufficientSubset(root.right, limit)

  // If both left and right children are pruned, prune this node as well
  // Otherwise, keep the node
  return root.left || root.right ? root : null
}
