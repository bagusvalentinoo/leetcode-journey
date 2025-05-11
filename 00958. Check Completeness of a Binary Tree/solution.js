/**
 * Problem: 958. Check Completeness of a Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if a binary tree is complete
 *
 * @param {TreeNode} root - Root node of the tree
 *
 * @returns {boolean} - Whether the tree is complete
 */
const isCompleteTree = (root) => {
  // Use BFS to traverse the tree level by level
  const queue = [root]
  let seenNull = false

  while (queue.length) {
    const node = queue.shift()

    if (!node) {
      // Mark that we've seen a null node
      seenNull = true
      continue
    }
    // If we find a node after seeing null, tree is not complete
    if (seenNull) return false

    // Add both children to queue (can be null)
    queue.push(node.left)
    queue.push(node.right)
  }

  // If we never found a node after a null, the tree is complete
  return true
}
