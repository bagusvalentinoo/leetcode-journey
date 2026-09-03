/**
 * Problem: 1572. Matrix Diagonal Sum
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func diagonalSum(mat [][]int) int {
  // Get matrix dimension
  n := len(mat)

  // Initialize sum accumulator
  total := 0

  // Iterate through each row
  for i := 0; i < n; i++ {
    // Calculate secondary diagonal column index
    secondaryCol := n - i - 1

    // Add primary diagonal element at [i][i]
    total += mat[i][i]

    // Add secondary diagonal element if not same as primary (avoid double count center)
    if i != secondaryCol {
      total += mat[i][secondaryCol]
    }
  }

  // Return total diagonal sum
  return total
}
