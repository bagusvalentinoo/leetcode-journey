/**
 * Problem: 1302. Deepest Leaves Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculates sum of values at the deepest level of a binary tree
 *
 * @param {TreeNode} root - Root node of the binary tree
 *
 * @returns {number} Sum of values at the deepest level
 */
const deepestLeavesSum = (root) => {
  // Handle empty tree case
  if (!root) return 0

  // Initialize queue for level-order traversal
  const queue = [root]

  // Pointer for queue processing
  let queueIndex = 0
  // Store sum of current level
  let currentLevelSum = 0

  // Process tree level by level
  while (queueIndex < queue.length) {
    // Get number of nodes in current level
    const levelSize = queue.length - queueIndex

    // Reset sum for new level
    currentLevelSum = 0

    // Process all nodes at current level
    for (let i = 0; i < levelSize; i++) {
      // Get next node from queue
      const node = queue[queueIndex++]

      // Add node value to current level sum
      currentLevelSum += node.val

      // Add children to queue for next level
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  // Return sum of deepest level
  return currentLevelSum
}
