/**
 * Problem: 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

/**
 * Find the largest square side length with sum ≤ threshold
 *
 * @param {number[][]} mat - 2D matrix
 * @param {number} threshold - Max allowed sum
 *
 * @returns {number} - Largest square side length
 */
const maxSideLength = (mat, threshold) => {
  // Get the number of rows (m) and columns (n) in the matrix
  const m = mat.length,
    n = mat[0].length

  // Initialize a 2D array `dp` to store prefix sums
  const dp = []

  // Fill the `dp` array with zeros, with dimensions (m+1) x (n+1)
  for (let i = 0; i <= m; i++) dp[i] = new Array(n + 1).fill(0)

  // Compute the prefix sum for each cell in the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        dp[i - 1][j] + dp[i][j - 1] + mat[i - 1][j - 1] - dp[i - 1][j - 1]
    }
  }

  // Initialize the maximum side length of the square to 0
  let maxLen = 0

  // Iterate through each cell in the matrix to find the largest square
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Start with the current maximum square length
      let len = maxLen

      // Check if a square of increasing size can fit within the threshold
      while (i - len >= 0 && j - len >= 0) {
        // Calculate the sum of the square using the prefix sum array
        const sum =
          dp[i][j] - dp[i - len][j] - dp[i][j - len] + dp[i - len][j - len]

        // If the sum exceeds the threshold, stop checking larger squares
        if (sum > threshold) break

        // Update the maximum square length if the current square is valid
        maxLen = Math.max(maxLen, len)
        len++
      }
    }
  }

  // Return the largest square side length found
  return maxLen
}
