/**
 * Problem: 1161. Maximum Level Sum of a Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Returns the 1-indexed level with the highest sum in a binary tree
 *
 * @param {TreeNode} root - Root of the binary tree
 *
 * @returns {number} - Level with maximum sum
 */
const maxLevelSum = (root) => {
  // Initialize an array to store the sum of values at each level
  let levelSums = []

  // Define a helper function for BFS traversal to calculate level sums
  const traverseLevels = (currentNode, currentLevel) => {
    const { val, left, right } = currentNode // Destructure node properties

    // If this is the first node at the current level, initialize the sum
    if (levelSums.length < currentLevel + 1) levelSums.push(val)
    // Otherwise, add the node's value to the existing sum for the level
    else levelSums[currentLevel] += val

    // Recursively traverse the left subtree, increasing the level
    if (left) traverseLevels(left, currentLevel + 1)
    // Recursively traverse the right subtree, increasing the level
    if (right) traverseLevels(right, currentLevel + 1)
  }

  // Reset the levelSums array before traversal
  levelSums = []

  // Start BFS traversal from the root node at level 0
  traverseLevels(root, 0)

  // Initialize variables to track the maximum sum and its corresponding level index
  let maxSum = -Infinity
  let maxLevelIndex = 0

  // Iterate through the levelSums array to find the level with the maximum sum
  for (let i = 0; i < levelSums.length; i++) {
    if (levelSums[i] > maxSum) {
      maxSum = levelSums[i]
      maxLevelIndex = i
    }
  }

  // Return the 1-indexed level with the highest sum
  return maxLevelIndex + 1
}
