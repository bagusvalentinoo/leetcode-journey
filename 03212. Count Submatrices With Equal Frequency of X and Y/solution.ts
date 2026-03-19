/**
 * Problem: 3212. Count Submatrices With Equal Frequency of X and Y
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 20 ms (Beats 100%)
 */

/**
 * Counts submatrices where number of X equals number of Y
 *
 * @param grid - Grid containing 'X' and 'Y'
 *
 * @returns Number of valid submatrices
 */
const numberOfSubmatrices = (grid: string[][]): number => {
  // Get grid dimensions
  const rows: number = grid.length,
    cols: number = grid[0].length

  // Track cumulative counts for each column
  const xColumnCounts: number[] = new Array(cols).fill(0),
    yColumnCounts: number[] = new Array(cols).fill(0)

  // Initialize total valid submatrices counter
  let totalValid: number = 0

  // Process each row as potential top of submatrix
  for (let currentRow: number = 0; currentRow < rows; currentRow++) {
    // Track counts for current row
    let rowXCount: number = 0,
      rowYCount: number = 0

    // Expand submatrix to the right column by column
    for (let currentCol: number = 0; currentCol < cols; currentCol++) {
      // Update row counts based on current cell
      if (grid[currentRow][currentCol] === 'X') rowXCount++
      if (grid[currentRow][currentCol] === 'Y') rowYCount++

      // Update cumulative column counts
      xColumnCounts[currentCol] += rowXCount
      yColumnCounts[currentCol] += rowYCount

      // Check if current submatrix from (0,0) to (currentRow, currentCol) is valid
      if (
        xColumnCounts[currentCol] > 0 &&
        xColumnCounts[currentCol] === yColumnCounts[currentCol]
      )
        totalValid++
    }
  }

  // Return total valid submatrices
  return totalValid
}
