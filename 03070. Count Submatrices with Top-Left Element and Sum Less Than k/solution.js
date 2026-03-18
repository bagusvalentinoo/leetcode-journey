/**
 * Problem: 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Counts number of submatrices with sum <= k
 *
 * @param {number[][]} grid - Input matrix
 * @param {number} k - Maximum allowed sum
 *
 * @returns {number} Number of valid submatrices
 */
const countSubmatrices = (grid, k) => {
  // Get matrix dimensions
  const rows = grid.length,
    cols = grid[0].length

  // Track running column sums
  const columnSums = new Array(cols).fill(0)

  // Initialize result counter
  let validCount = 0

  // Iterate through each row as potential top of submatrix
  for (let topRow = 0; topRow < rows; topRow++) {
    // Track running row sum for current submatrix
    let rowSum = 0

    // Expand submatrix to the right column by column
    for (let rightCol = 0; rightCol < cols; rightCol++) {
      // Add current cell to column sum
      columnSums[rightCol] += grid[topRow][rightCol]

      // Add this column's total to current row sum
      rowSum += columnSums[rightCol]

      // If current submatrix sum is within limit, count it
      if (rowSum <= k) validCount++
    }
  }

  // Return total count of valid submatrices
  return validCount
}
