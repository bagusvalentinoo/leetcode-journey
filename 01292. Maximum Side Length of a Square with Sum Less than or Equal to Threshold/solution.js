/**
 * Problem: 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Finds maximum square side length where sum ≤ threshold
 *
 * @param {number[][]} mat - Input matrix of integers
 * @param {number} threshold - Maximum allowed sum for square
 *
 * @returns {number} - Maximum square side length
 */
const maxSideLength = (mat, threshold) => {
  // Get matrix dimensions
  const m = mat.length, n = mat[0].length

  // Create prefix sum matrix with extra row/column for easier calculations
  const prefixSum = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))

  // Build 2D prefix sum matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Calculate cumulative sum using inclusion-exclusion principle
      prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] -
        prefixSum[i - 1][j - 1] + mat[i - 1][j - 1]
    }
  }

  // Helper function to get sum of any submatrix in O(1)
  const getSubmatrixSum = (x1, y1, x2, y2) => prefixSum[x2][y2] - prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] + prefixSum[x1 - 1][y1 - 1]

  // Maximum possible square side limited by matrix dimensions
  const maxPossibleSide = Math.min(m, n)

  // Track best square side found
  let bestSide = 0

  // Try all possible starting positions
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Try squares larger than current best
      for (let side = bestSide + 1; side <= maxPossibleSide; side++) {
        // Check if square fits within matrix boundaries
        const endRow = i + side - 1, endCol = j + side - 1

        if (endRow > m || endCol > n) break

        // Calculate sum of current square
        const squareSum = getSubmatrixSum(i, j, endRow, endCol)

        // Update best side if sum ≤ threshold
        if (squareSum <= threshold) bestSide = side
        else break // Larger squares will have larger sums
      }
    }
  }

  return bestSide
}
