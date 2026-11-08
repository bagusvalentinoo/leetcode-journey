/**
 * Problem: 2319. Check if Matrix Is X-Matrix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkXMatrix(grid [][]int) bool {
  // Store the matrix dimension for diagonal comparisons
  size := len(grid)

  // Check every cell against its required diagonal value
  for row := 0; row < size; row++ {
    for column := 0; column < size; column++ {
      // Determine whether the current cell belongs to either diagonal
      isDiagonal := row == column || row+column == size-1

      // Reject a zero diagonal cell or a non-zero non-diagonal cell
      if isDiagonal && grid[row][column] == 0 || !isDiagonal && grid[row][column] != 0 {
        return false
      }
    }
  }

  // Return true when every cell meets its requirement
  return true
}
