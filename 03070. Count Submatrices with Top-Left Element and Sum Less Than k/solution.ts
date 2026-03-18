/**
 * Problem: 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Counts number of submatrices with sum <= k
 *
 * @param grid - Input matrix
 * @param k - Maximum allowed sum
 *
 * @returns Number of valid submatrices
 */
const countSubmatrices = (grid: number[][], k: number): number => {
  // Get matrix dimensions
  const rows: number = grid.length,
    cols: number = grid[0].length

  // Track running column sums
  const columnSums: number[] = new Array(cols).fill(0)

  // Initialize result counter
  let validCount: number = 0

  // Iterate through each row as potential top of submatrix
  for (let topRow: number = 0; topRow < rows; topRow++) {
    // Track running row sum for current submatrix
    let rowSum: number = 0

    // Expand submatrix to the right column by column
    for (let rightCol: number = 0; rightCol < cols; rightCol++) {
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
