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
 * @returns {number} The sum of all binary numbers formed by root-to-leaf paths
 */
const sumRootToLeaf = (root) => {
  // Array to store binary strings from root-to-leaf paths
  const binaryStrings = []

  // Depth-first traversal to collect all root-to-leaf paths as binary strings
  const dfs = (node, currentPath) => {
    // Append current node's value to path
    currentPath += node.val

    // If leaf node, store the complete binary string
    if (!node.left && !node.right) {
      // Push the complete binary string to the array
      binaryStrings.push(currentPath)

      // Return to previous call
      return
    }

    // Recursively traverse left and right subtrees
    if (node.left) dfs(node.left, currentPath)
    if (node.right) dfs(node.right, currentPath)
  }

  // Start DFS from root with empty string
  dfs(root, '')

  // Convert all binary strings to numbers and sum them
  const totalSum = binaryStrings.reduce(
    (accumulator, binaryString) => accumulator + parseInt(binaryString, 2),
    0
  )

  // Return the total sum
  return totalSum
}
