/**
 * Problem: 1315. Sum of Nodes with Even-Valued Grandparent
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
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
 * Helper function to sum values of direct children of a node
 *
 * @param root - Current node
 *
 * @returns Sum of left and right child values
 */
const sumOfChildren = (root: TreeNode | null): number => {
  // Base case: null node has no children
  if (root === null) return 0

  // Initialize accumulator for child values
  let total: number = 0

  // Add left child value if exists
  if (root.left !== null) total += root.left.val
  // Add right child value if exists
  if (root.right !== null) total += root.right.val

  return total
}

/**
 * Calculates sum of all nodes that have an even-valued grandparent
 *
 * @param root - Root of the binary tree
 *
 * @returns Sum of values with even grandparents
 */
const sumEvenGrandparent = (root: TreeNode | null): number => {
  // Base case: null node contributes nothing
  if (root === null) return 0

  // If current node has even value, include its grandchildren
  if (root.val % 2 === 0)
    return (
      // Sum of current node's grandchildren (children of its children)
      sumOfChildren(root.left) +
      sumOfChildren(root.right) +
      // Recurse to check grandchildren for their own even grandparents
      sumEvenGrandparent(root.left) +
      sumEvenGrandparent(root.right)
    )

  // If current node value is odd, just recurse without adding grandchildren
  return sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
}
