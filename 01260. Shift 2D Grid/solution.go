/**
 * Problem: 1260. Shift 2D Grid
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func shiftGrid(grid [][]int, k int) [][]int {
	// Get the number of rows (rowCount) and columns (colCount) in the grid
	rowCount, colCount := len(grid), len(grid[0])

	// Initialize the result grid with the same dimensions as the input grid
	resultGrid := make([][]int, rowCount)
	for rowIndex := range resultGrid {
		// Create a slice for each row in the result grid
		resultGrid[rowIndex] = make([]int, colCount)
	}

	// Iterate over each cell in the input grid
	for row := 0; row < rowCount; row++ {
		for col := 0; col < colCount; col++ {
			// Calculate the 1D index for the current cell
			currentIndex := row*colCount + col

			// Compute the new 1D index after shifting by k positions
			shiftedIndex := (currentIndex + k) % (rowCount * colCount)

			// Convert the shifted 1D index back to 2D coordinates
			newRow := shiftedIndex / colCount
			newCol := shiftedIndex % colCount

			// Place the value from the original grid into its new position
			resultGrid[newRow][newCol] = grid[row][col]
		}
	}

	// Return the shifted result grid
	return resultGrid
}
