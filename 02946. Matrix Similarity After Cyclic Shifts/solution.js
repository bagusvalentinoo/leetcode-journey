/**
 * Problem: 2946. Matrix Similarity After Cyclic Shifts
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if matrix remains the same after shifting each row left by k positions
 *
 * @param {number[][]} mat - Input matrix
 * @param {number} k - Number of positions to shift left
 *
 * @returns {boolean} True if matrix is similar after shifting
 */
const areSimilar = (mat, k) =>
  // Check each row in the matrix
  mat.every((row, rowIndex) =>
    // Check each element in current row
    row.every(
      (value, colIndex) =>
        // Compare with element at shifted position
        // Formula: original column + k (mod total columns)
        value === mat[rowIndex][(colIndex + k) % mat[0].length]
    )
  )
