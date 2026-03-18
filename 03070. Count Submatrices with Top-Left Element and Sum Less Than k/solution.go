/**
 * Problem: 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countSubmatrices(grid [][]int, k int) int {
	// Get matrix dimensions
	rows, cols := len(grid), len(grid[0])

	// Track running column sums
	columnSums := make([]int, cols)

	// Initialize result counter
	validCount := 0

	// Iterate through each row as potential top of submatrix
	for topRow := 0; topRow < rows; topRow++ {
		// Track running row sum for current submatrix
		rowSum := 0

		// Expand submatrix to the right column by column
		for rightCol := 0; rightCol < cols; rightCol++ {
			// Add current cell to column sum
			columnSums[rightCol] += grid[topRow][rightCol]

			// Add this column's total to current row sum
			rowSum += columnSums[rightCol]

			// If current submatrix sum is within limit, count it
			if rowSum <= k {
				validCount++
			}
		}
	}

	// Return total count of valid submatrices
	return validCount
}
