/**
 * Problem: 3643. Flip Square Submatrix Vertically
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reverseSubmatrix(grid [][]int, x int, y int, k int) [][]int {
	// Pointer for top row of submatrix
	topRow := x
	// Pointer for bottom row of submatrix
	bottomRow := x + k - 1

	// Swap rows from top to bottom until they meet
	for topRow < bottomRow {
		// Swap all columns in current row pair
		for col := y; col < y+k; col++ {
			// Store current top row value
			tempValue := grid[topRow][col]

			// Replace top row with bottom row value
			grid[topRow][col] = grid[bottomRow][col]
			// Replace bottom row with stored top row value
			grid[bottomRow][col] = tempValue
		}

		// Move pointers inward
		topRow++
		bottomRow--
	}

	// Return grid with reversed submatrix
	return grid
}
