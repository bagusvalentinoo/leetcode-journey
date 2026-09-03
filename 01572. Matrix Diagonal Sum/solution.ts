/**
 * Problem: 1572. Matrix Diagonal Sum
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates sum of both diagonals, counting center once
 *
 * @param mat - Square matrix
 *
 * @returns Sum of primary and secondary diagonals
 */
const diagonalSum = (mat: number[][]): number => {
  // Get matrix dimension
  const n: number = mat.length

  // Initialize sum accumulator
  let total: number = 0

  // Iterate through each row
  for (let i: number = 0; i < n; i++) {
    // Calculate secondary diagonal column index
    const secondaryCol: number = n - i - 1

    // Add primary diagonal element at [i][i]
    total += mat[i][i]

    // Add secondary diagonal element if not same as primary (avoid double count center)
    if (i !== secondaryCol) total += mat[i][secondaryCol]
  }

  // Return total diagonal sum
  return total
}
