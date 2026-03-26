/**
 * Problem: 1325. Delete Leaves With a Given Value
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Removes all leaf nodes with value equal to target recursively
 *
 * @param {TreeNode} root - Root of the binary tree
 * @param {number} target - Target value to remove
 *
 * @returns {TreeNode} Root of the modified tree
 */
const removeLeafNodes = (root, target) => {
  // Base case: null node returns null
  if (root === null) return null

  // Recursively process left subtree
  root.left = removeLeafNodes(root.left, target)
  // Recursively process right subtree
  root.right = removeLeafNodes(root.right, target)

  // If current node becomes a leaf with target value, remove it
  if (root.val === target && root.left === null && root.right === null)
    return null

  // Otherwise keep the node
  return root
}
