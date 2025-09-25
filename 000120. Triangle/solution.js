/**
 * Problem: 120. Triangle
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the minimum path sum in a triangle
 *
 * @param {number[][]} triangle - A 2D array representing the triangle
 *
 * @returns {number} - The minimum path sum from top to bottom
 */
const minimumTotal = (triangle) => {
  // Get the number of rows in the triangle
  const numRows = triangle.length

  // Initialize a 2D DP array with Number.MAX_VALUE to store minimum path sums
  const dp = Array(numRows)
    .fill(Number.MAX_VALUE)
    .map(() => Array(numRows).fill(Number.MAX_VALUE))

  // Recursive helper function to compute minimum path sum from (row, col)
  const findMinPath = (row, col) => {
    // Base case: if at the last row, return the value at that position
    if (row === numRows - 1) return triangle[row][col]

    // If already computed, return the cached value
    if (dp[row][col] !== Number.MAX_VALUE) return dp[row][col]

    // Calculate the path sum by moving down
    const down = triangle[row][col] + findMinPath(row + 1, col)
    // Calculate the path sum by moving diagonally down-right
    const diag = triangle[row][col] + findMinPath(row + 1, col + 1)

    // Store and return the minimum of the two possible paths
    return (dp[row][col] = Math.min(down, diag))
  }

  // Start the recursion from the top of the triangle
  return findMinPath(0, 0)
}
