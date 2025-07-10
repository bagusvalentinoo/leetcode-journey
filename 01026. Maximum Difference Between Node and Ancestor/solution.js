/**
 * Problem: 1026. Maximum Difference Between Node and Ancestor
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Given a binary tree, find the maximum absolute difference between any ancestor and descendant node values
 *
 * @param {TreeNode} root - Root of the binary tree
 *
 * @returns {number} - Maximum absolute difference between any ancestor and descendant node values
 */
const maxAncestorDiff = (root) => {
  // Initialize the maximum absolute difference
  let absDiff = -1

  // Helper function to traverse the tree and find the maximum absolute difference
  const findDiff = (root) => {
    // Base case: if the node is null, return a sentinel value
    if (root === null) return [-1, Infinity]

    // Recursively find the minimum and maximum values in the left and right subtrees
    const left = findDiff(root.left),
      right = findDiff(root.right)

    // Update the maximum absolute difference using the current node's value
    // and the minimum and maximum values from the left and right subtrees
    const minVal = Math.min(root.val, Math.min(left[1], right[1])),
      maxVal = Math.max(root.val, Math.max(left[0], right[0]))

    // Update the global maximum absolute difference
    absDiff = Math.max(
      absDiff,
      Math.abs(root.val - minVal),
      Math.abs(root.val - maxVal)
    )

    // Return the current node's value as the maximum and minimum for its subtree
    return [maxVal, minVal]
  }

  // Start the recursive traversal from the root
  findDiff(root)

  // Return the maximum absolute difference found
  return absDiff
}
