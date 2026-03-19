/**
 * Problem: 3212. Count Submatrices With Equal Frequency of X and Y
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 20 ms (Beats 100%)
 */

/**
 * Counts submatrices where number of X equals number of Y
 *
 * @param {character[][]} grid - Grid containing 'X' and 'Y'
 *
 * @returns {number} Number of valid submatrices
 */
const numberOfSubmatrices = (grid) => {
  // Get grid dimensions
  const rows = grid.length,
    cols = grid[0].length

  // Track cumulative counts for each column
  const xColumnCounts = new Array(cols).fill(0),
    yColumnCounts = new Array(cols).fill(0)

  // Initialize total valid submatrices counter
  let totalValid = 0

  // Process each row as potential top of submatrix
  for (let currentRow = 0; currentRow < rows; currentRow++) {
    // Track counts for current row
    let rowXCount = 0,
      rowYCount = 0

    // Expand submatrix to the right column by column
    for (let currentCol = 0; currentCol < cols; currentCol++) {
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
