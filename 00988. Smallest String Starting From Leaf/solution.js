/**
 * Problem: 988. Smallest String Starting From Leaf
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the lexicographically smallest string from leaf to root in a binary tree
 *
 * @param {TreeNode} root - The root node
 *
 * @returns {string} - Smallest leaf-to-root string
 */
const smallestFromLeaf = (root) => {
  // Recursive function to find all paths from node to leaf
  const traverse = (node, path) => {
    // Exit if node doesn't exist
    if (!node) return

    // Add current character to the start of path (converting 0-25 to 'a'-'z')
    const currentPath = String.fromCharCode(97 + node.val) + path

    // Update result if we've reached a leaf node and path is lexicographically smaller
    if (
      !node.left &&
      !node.right &&
      (!smallestString || currentPath < smallestString)
    )
      smallestString = currentPath

    // Recursively explore left subtree
    traverse(node.left, currentPath)
    // Recursively explore right subtree
    traverse(node.right, currentPath)
  }

  // Initialize result variable to track the smallest string
  let smallestString = null

  traverse(root, '')

  return smallestString
}
