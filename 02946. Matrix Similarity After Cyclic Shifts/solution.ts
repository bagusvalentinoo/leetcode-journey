/**
 * Problem: 2946. Matrix Similarity After Cyclic Shifts
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if matrix remains the same after shifting each row left by k positions
 *
 * @param mat - Input matrix
 * @param k - Number of positions to shift left
 *
 * @returns True if matrix is similar after shifting
 */
const areSimilar = (mat: number[][], k: number): boolean =>
  // Check each row in the matrix
  mat.every((row: number[], rowIndex: number) =>
    // Check each element in current row
    row.every(
      (value: number, colIndex: number) =>
        // Compare with element at shifted position
        // Formula: original column + k (mod total columns)
        value === mat[rowIndex][(colIndex + k) % mat[0].length]
    )
  )
