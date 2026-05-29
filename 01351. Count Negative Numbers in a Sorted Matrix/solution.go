/**
 * Problem: 1351. Count Negative Numbers in a Sorted Matrix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countNegatives(grid [][]int) int {
	// Get grid dimensions
	rows, cols := len(grid), len(grid[0])

	// Pointer for current row
	currentRow := 0

	// Pointer for current column (start from last column)
	currentCol := cols - 1

	// Counter for negative numbers
	negativeCount := 0

	// Traverse grid from top-right corner to bottom-left
	for currentRow < rows && currentCol >= 0 {
		// If current element is negative
		if grid[currentRow][currentCol] < 0 {
			// All elements below in this column are also negative
			negativeCount += rows - currentRow
			// Move left to previous column
			currentCol--
		} else {
			// If current element is non-negative, move down to next row
			currentRow++
		}
	}

	// Return total count of negative numbers
	return negativeCount
}
