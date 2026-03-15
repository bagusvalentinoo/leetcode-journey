/**
 * Problem: 1314. Matrix Block Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates sum of all elements in k x k blocks around each matrix cell
 *
 * @param {number[][]} mat - Input matrix
 * @param {number} k - Block radius
 *
 * @returns {number[][]} Matrix with block sums
 */
const matrixBlockSum = (mat, k) => {
  // Get matrix dimensions for iteration boundaries
  const rows = mat.length,
    cols = mat[0].length

  // Create prefix sum array with extra row and column for easier calculations
  const prefixSum = Array(rows + 1)

  // Initialize first row of prefix sum with zeros
  prefixSum[0] = Array(cols + 1).fill(0)

  // Build prefix sum matrix row by row
  for (let i = 0; i < rows; i++) {
    // Start each new row with a zero at column 0
    prefixSum[i + 1] = [0]

    // Calculate prefix sums for each column in current row
    for (let j = 0; j < cols; j++)
      // Formula: current cell + top cell + left cell - top-left diagonal cell
      // This gives sum of all elements in rectangle from (0,0) to (i,j)
      prefixSum[i + 1][j + 1] =
        mat[i][j] + prefixSum[i][j + 1] + prefixSum[i + 1][j] - prefixSum[i][j]
  }

  // Replace each cell with sum of its k×k block
  for (let i = 0; i < rows; i++) {
    // Process each column in current row
    for (let j = 0; j < cols; j++) {
      // Calculate block boundaries, clamped to matrix edges
      const top = Math.max(0, i - k),
        bottom = Math.min(rows - 1, i + k),
        left = Math.max(0, j - k),
        right = Math.min(cols - 1, j + k)

      // Use inclusion-exclusion principle with prefix sums:
      // Block sum = (bottom-right) - (top-right) - (bottom-left) + (top-left)
      mat[i][j] =
        prefixSum[bottom + 1][right + 1] -
        prefixSum[top][right + 1] -
        prefixSum[bottom + 1][left] +
        prefixSum[top][left]
    }
  }

  // Return the modified matrix with block sums
  return mat
}
