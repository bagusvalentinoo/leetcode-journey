/**
 * Problem: 73. Set Matrix Zeroes
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sets entire row and column to 0 for each 0 element in the matrix
 *
 * @param {number[][]} matrix - Input matrix
 *
 * @returns {void} - Modifies the input matrix in place
 */
const setZeroes = (matrix) => {
  // Get matrix dimensions (subtracting 1 for zero-based indexing)
  const rowCount = matrix.length - 1,
    colCount = matrix[0].length - 1

  // Flag to track if first row needs to be zeroed
  let hasZeroInFirstRow = false

  // First pass: mark rows and columns that need to be zeroed
  for (let r = 0; r <= rowCount; r++) {
    for (let c = 0; c <= colCount; c++) {
      const value = matrix[r][c]

      // Handle zeros in first row separately
      if (r === 0 && value === 0) {
        hasZeroInFirstRow = true
        continue
      }

      // Mark the first cell in row and column when we find a zero
      if (value === 0) {
        matrix[r][0] = 0
        matrix[0][c] = 0
      }
    }
  }

  // Second pass: zero marked rows (except first row)
  for (let r = 1; r <= rowCount; r++) {
    const value = matrix[r][0]

    if (value !== 0) continue

    // Zero entire row if marked
    for (let c = 1; c <= colCount; c++) matrix[r][c] = 0
  }

  // Third pass: zero marked columns (for all rows except first)
  for (let c = 0; c <= colCount; c++) {
    const value = matrix[0][c]

    if (value !== 0) continue

    // Zero entire column if marked
    for (let r = 1; r <= rowCount; r++) matrix[r][c] = 0
  }

  // Finally: handle first row if needed
  if (!hasZeroInFirstRow) return

  // Zero the first row
  for (let c = 0; c <= colCount; c++) matrix[0][c] = 0
}
