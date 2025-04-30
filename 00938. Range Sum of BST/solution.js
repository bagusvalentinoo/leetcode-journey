/**
 * Problem: 938. Range Sum of BST
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the sum of node values in the BST within the range [low, high]
 *
 * @param {TreeNode} root - The root of the BST
 * @param {number} low - The lower bound of the range
 * @param {number} high - The upper bound of the range
 *
 * @returns {number} - Sum of node values in the range
 */
const rangeSumBST = (root, low, high) => {
  // If the tree is empty, return 0
  if (!root) return 0
  // If the current node's value is less than low, search in the right subtree
  if (root.val < low) return rangeSumBST(root.right, low, high)
  // If the current node's value is greater than high, search in the left subtree
  if (root.val > high) return rangeSumBST(root.left, low, high)

  // If the current node's value is within the range, include it in the sum
  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  )
}
