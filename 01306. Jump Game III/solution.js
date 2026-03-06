/**
 * Problem: 1306. Jump Game III
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if we can reach index with value 0 by jumping left or right
 *
 * @param {number[]} arr - Array of integers
 * @param {number} start - Starting index
 *
 * @returns {boolean} True if we can reach a zero value, false otherwise
 */
const canReach = (arr, start) => {
  // Depth-first search to explore possible jumps
  const dfs = (index) => {
    // Stop if index out of bounds or already visited
    if (index < 0 || index >= arr.length || arr[index] === 'seen') return false
    // Return true if current value is zero
    if (arr[index] === 0) return true

    // Get the jump value
    const jumpValue = arr[index]

    // Mark current index as visited
    arr[index] = 'seen'

    // Try jumping left and right
    return dfs(index - jumpValue) || dfs(index + jumpValue)
  }

  // Start DFS from the starting index
  return dfs(start)
}
