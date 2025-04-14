/**
 * Problem: 897. Increasing Order Search Tree
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Rearranges a binary search tree into an increasing order tree.
 *
 * @param {TreeNode} root - The root of the binary search tree
 *
 * @returns {TreeNode} - The root of the rearranged increasing order tree
 */
const increasingBST = (root) => {
  // Initialize variables
  const dummy = new TreeNode(-1)
  let tail = dummy

  // Perform in-order traversal
  const inorder = (node) => {
    // Base case
    if (!node) return

    // Recursively traverse left subtree
    inorder(node.left)

    // Link current node to the tail
    tail.right = node
    node.left = null
    tail = node

    // Recursively traverse right subtree
    inorder(node.right)
  }

  // Perform in-order traversal
  inorder(root)

  // Return the rearranged tree
  return dummy.right
}
