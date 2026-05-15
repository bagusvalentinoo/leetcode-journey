/**
 * Problem: 3417. Zigzag Grid Traversal With Skip
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func zigzagTraversal(grid [][]int) []int {
	// Slice to store collected elements
	result := make([]int, 0)

	// Iterate through each row in the grid
	for rowIndex := 0; rowIndex < len(grid); rowIndex++ {
		// If row index is even, traverse left to right
		if rowIndex%2 == 0 {
			// Iterate through columns from left to right
			for colIndex := 0; colIndex < len(grid[0]); colIndex++ {
				// Add element if sum of indices is even
				if (rowIndex+colIndex)%2 == 0 {
					result = append(result, grid[rowIndex][colIndex])
				}
			}
		} else {
			// If row index is odd, traverse right to left

			// Iterate through columns from right to left
			for colIndex := len(grid[0]) - 1; colIndex >= 0; colIndex-- {
				// Add element if sum of indices is even
				if (rowIndex+colIndex)%2 == 0 {
					result = append(result, grid[rowIndex][colIndex])
				}
			}
		}
	}

	// Return the final result
	return result
}
