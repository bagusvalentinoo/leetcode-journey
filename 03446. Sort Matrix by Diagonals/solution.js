/**
 * Problem: 3446. Sort Matrix by Diagonals
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Sorts each diagonal of a 2D matrix in-place
 *
 * @param {number[][]} grid - The matrix to sort
 *
 * @returns {number[][]} - The sorted matrix
 */
const sortMatrix = (grid) => {
  // Get the number of rows (m) and columns (n) in the grid
  const rowCount = grid.length,
    colCount = grid[0].length

  // Find the maximum of rows and columns to cover all diagonals
  const maxDim = Math.max(rowCount, colCount)

  // Iterate over all possible diagonal differences (from top-left to bottom-right)
  for (
    let diagonalDiff = -(maxDim - 1);
    diagonalDiff <= maxDim - 1;
    diagonalDiff++
  ) {
    // Collect all values along the current diagonal
    const diagonalValues = []

    // Traverse the diagonal by calculating row and column indices
    for (
      let row = Math.max(diagonalDiff, 0), col = row - diagonalDiff;
      row < rowCount && col < colCount;
      row++, col++
    )
      diagonalValues.push(grid[row][col])

    // Sort the diagonal values in ascending order if diagonalDiff is negative
    if (diagonalDiff < 0) diagonalValues.sort((a, b) => a - b)
    // Otherwise, sort in descending order
    else diagonalValues.sort((a, b) => b - a)

    // Write the sorted values back to the grid along the same diagonal
    let valueIndex = 0
    for (
      let row = Math.max(diagonalDiff, 0), col = row - diagonalDiff;
      row < rowCount && col < colCount;
      row++, col++
    )
      grid[row][col] = diagonalValues[valueIndex++]
  }

  // Return the sorted grid
  return grid
}
