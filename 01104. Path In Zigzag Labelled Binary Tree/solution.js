/**
 * Problem: 1104. Path In Zigzag Labelled Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the path from root to a node in a zigzag labeled binary tree
 *
 * @param {number} label - Target node label
 *
 * @returns {number[]} - Path from root to label
 */
const pathInZigZagTree = (label) => {
  // Initialize an array to store the path from root to the target label
  const path = []

  // Loop until label reaches the root node (label >= 1)
  while (label >= 1) {
    // Add the current label to the beginning of the path array
    path.unshift(label)

    // Calculate the level of the current label in the binary tree
    const level = Math.floor(Math.log2(label))
    // Find the minimum label value at the current level
    const minLabelAtLevel = Math.pow(2, level)
    // Find the maximum label value at the current level
    const maxLabelAtLevel = Math.pow(2, level + 1) - 1

    // Compute the parent label in the zigzag labeled binary tree
    label = Math.floor((maxLabelAtLevel + minLabelAtLevel - label) / 2)
  }

  // Return the constructed path from root to the target label
  return path
}
