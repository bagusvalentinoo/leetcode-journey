/**
 * Problem: 1139. Largest 1-Bordered Square
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 3Gg ms (Beats 100%)
 */

func largest1BorderedSquare(grid [][]int) int {
	// Get the number of rows and columns in the grid
	n := len(grid)
	m := len(grid[0])

	// Initialize 2D slices to store the count of consecutive 1s to the left and top of each cell
	left := make([][]int, n)
	for i := range left {
		left[i] = make([]int, m)
	}

	top := make([][]int, n)
	for i := range top {
		top[i] = make([]int, m)
	}

	// Fill the 'left' matrix with counts of consecutive 1s to the left of each cell
	for row := range grid {
		left[row][0] = 0 // First column has no left neighbor

		for col := 1; col < m; col++ {
			if grid[row][col-1] == 1 {
				// If the left neighbor is 1, increment the count
				left[row][col] = left[row][col-1] + 1
			} else {
				// Otherwise, reset the count to 0
				left[row][col] = 0
			}
		}
	}

	// Fill the 'top' matrix with counts of consecutive 1s above each cell
	for col := 0; col < m; col++ {
		top[0][col] = 0 // First row has no top neighbor

		for row := 1; row < n; row++ {
			if grid[row-1][col] == 1 {
				// If the top neighbor is 1, increment the count
				top[row][col] = top[row-1][col] + 1
			} else {
				// Otherwise, reset the count to 0
				top[row][col] = 0
			}
		}
	}

	// Variable to keep track of the maximum square size found
	maxSquareSize := 0

	// Iterate through each cell in the grid
	for row := 0; row < n; row++ {
		for col := 0; col < m; col++ {
			// Only consider cells with value 1
			if grid[row][col] == 1 {
				// At least a 1x1 square is possible
				maxSquareSize = max(maxSquareSize, 1)
				currentSquareSize := 1

				// Try to expand the square size as much as possible
				for k := 1; k <= min(top[row][col], left[row][col]); k++ {
					currentSquareSize++

					// Check if the left and top borders of the potential square are valid
					if left[row-k][col] >= currentSquareSize-1 && top[row][col-k] >= currentSquareSize-1 {
						// Update the maximum square size found
						maxSquareSize = max(maxSquareSize, currentSquareSize)
					}
				}
			}
		}
	}

	// Return the area of the largest 1-bordered square found
	return maxSquareSize * maxSquareSize
}
