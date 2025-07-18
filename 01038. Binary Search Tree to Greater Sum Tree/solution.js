/**
 * Problem: 1038. Binary Search Tree to Greater Sum Tree
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Converts a BST to a Greater Sum Tree
 *
 * @param {TreeNode} root - Root of the BST
 *
 * @returns {TreeNode} - Root of the Greater Sum Tree
 */
const bstToGst = (root) => {
  // Initialize accumulator to track the running sum of greater values
  let sum = 0

  // Helper function to perform reverse in-order traversal (right -> node -> left)
  const traverse = (node) => {
    // Base case: if current node exists
    if (node) {
      // First, traverse the right subtree (larger values)
      traverse(node.right)

      // Add current node's value to the running sum
      sum += node.val
      // Update current node's value to the accumulated sum
      node.val = sum

      // Finally, traverse the left subtree (smaller values)
      traverse(node.left)
    }
  }

  // Start the traversal from the root node
  traverse(root)

  // Return the modified tree root
  return root
}
