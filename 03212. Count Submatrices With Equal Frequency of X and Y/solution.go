/**
 * Problem: 3212. Count Submatrices With Equal Frequency of X and Y
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

func numberOfSubmatrices(grid [][]byte) int {
	// Get grid dimensions
	rows, cols := len(grid), len(grid[0])

	// Track cumulative counts for each column
	xColumnCounts, yColumnCounts := make([]int, cols), make([]int, cols)

	// Initialize total valid submatrices counter
	totalValid := 0

	// Process each row as potential top of submatrix
	for currentRow := 0; currentRow < rows; currentRow++ {
		// Track counts for current row
		rowXCount, rowYCount := 0, 0

		// Expand submatrix to the right column by column
		for currentCol := 0; currentCol < cols; currentCol++ {
			// Update row counts based on current cell
			if grid[currentRow][currentCol] == 'X' {
				rowXCount++
			}
			if grid[currentRow][currentCol] == 'Y' {
				rowYCount++
			}

			// Update cumulative column counts
			xColumnCounts[currentCol] += rowXCount
			yColumnCounts[currentCol] += rowYCount

			// Check if current submatrix from (0,0) to (currentRow, currentCol) is valid
			if xColumnCounts[currentCol] > 0 &&
				xColumnCounts[currentCol] == yColumnCounts[currentCol] {
				totalValid++
			}
		}
	}

	// Return total valid submatrices
	return totalValid
}
