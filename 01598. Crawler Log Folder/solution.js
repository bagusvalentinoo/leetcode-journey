/**
 * Problem: 1598. Crawler Log Folder
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts folder depth after processing crawler log operations
 *
 * @param {string[]} logs - Array of folder change operations
 *
 * @returns {number} Minimum operations to return to main folder
 */
const minOperations = (logs) => {
  // Track current depth from main folder
  let depth = 0

  // Process each log operation
  for (const log of logs) {
    // Stay in same folder: no depth change
    if (log === './') continue
    // Move to parent: decrement depth but never below main folder
    else if (log === '../') depth = Math.max(0, depth - 1)
    // Move to child folder: increment depth
    else depth++
  }

  // Return depth as operations needed to go back to main folder
  return depth
}
