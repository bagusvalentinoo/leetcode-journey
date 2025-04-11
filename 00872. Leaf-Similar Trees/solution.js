/**
 * Problem: 872. Leaf-Similar Trees
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%), Memory - 56.14 MB (70.88%)
 */

/**
 * Given two binary trees, determine if they are leaf-similar
 *
 * @param {TreeNode} root1 - The root of the first binary tree
 * @param {TreeNode} root2 - The root of the second binary tree
 *
 * @returns {boolean} - True if the trees are leaf-similar, false otherwise
 */
const leafSimilar = (root1, root2) => {
  /**
   * Helper function to extract the leaf value sequence of a binary tree
   *
   * @param {TreeNode} node - The current node being processed
   * @param {number[]} leaves - Array to store the leaf values
   */
  const getLeaves = (node, leaves) => {
    if (!node) return
    if (!node.left && !node.right) leaves.push(node.val)
    getLeaves(node.left, leaves)
    getLeaves(node.right, leaves)
  }

  // Extract leaf sequences for both trees
  const leaves1 = []
  const leaves2 = []
  getLeaves(root1, leaves1)
  getLeaves(root2, leaves2)

  // Compare the leaf sequences
  return (
    leaves1.length === leaves2.length &&
    leaves1.every((val, i) => val === leaves2[i])
  )
}
