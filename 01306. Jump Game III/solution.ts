/**
 * Problem: 1306. Jump Game III
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if we can reach index with value 0 by jumping left or right
 *
 * @param arr - Array of integers
 * @param start - Starting index
 *
 * @returns True if we can reach a zero value, false otherwise
 */
const canReach = (arr: number[], start: number): boolean => {
  // Depth-first search to explore possible jumps
  const dfs = (index: number): boolean => {
    // Stop if index out of bounds or already visited
    if (index < 0 || index >= arr.length || arr[index] === -1) return false
    // Return true if current value is zero
    if (arr[index] === 0) return true

    // Get the jump value
    const jumpValue: number = arr[index]

    // Mark current index as visited (using -1 to indicate visited)
    arr[index] = -1

    // Try jumping left and right
    return dfs(index - jumpValue) || dfs(index + jumpValue)
  }

  // Start DFS from the starting index
  return dfs(start)
}
