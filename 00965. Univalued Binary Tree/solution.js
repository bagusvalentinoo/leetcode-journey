/**
 * Problem: 965. Univalued Binary Tree
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all nodes in a binary tree have the same value
 *
 * @param {TreeNode} root - Root node of the binary tree
 *
 * @returns {boolean} - True if all nodes have identical values
 */
const isUnivalTree = (root) => {
  // If tree is empty, consider it univalued
  if (!root) return true

  // Store the value that all nodes should match
  const uni = root.val
  // Use BFS with a queue starting with the root
  const queue = [root]

  let curNode

  while (queue.length > 0) {
    // Process the next node in the queue
    curNode = queue.shift()

    // If any node has a different value, tree is not univalued
    if (curNode.val !== uni) return false

    // Add children to the queue if they exist
    curNode.left && queue.push(curNode.left)
    curNode.right && queue.push(curNode.right)
  }

  // If we've checked all nodes without returning false, the tree is univalued
  return true
}
