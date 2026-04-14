/**
 * Problem: 3402. Minimum Operations to Make Columns Strictly Increasing
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumOperations(grid [][]int) int {
	// If only one row, no operations needed
	if len(grid) == 1 {
		return 0
	}

	// Initialize operations counter and column pointer
	operations, column := 0, 0

	// Get number of columns in the grid
	columnCount := len(grid[0])

	// Process each column independently
	for column < columnCount {
		// Iterate through rows from top to bottom
		for row := 1; row < len(grid); row++ {
			// Check if current value is not greater than previous row's value
			if grid[row][column] <= grid[row-1][column] {
				// Calculate how much to increase to make it strictly greater
				increment := grid[row-1][column] - grid[row][column] + 1

				// Apply increment to current cell
				grid[row][column] = grid[row][column] + increment
				// Add increment to total operations count
				operations += increment
			}
		}

		// Move to next column
		column++
	}

	// Return total operations
	return operations
}
