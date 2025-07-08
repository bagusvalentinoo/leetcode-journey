/**
 * Problem: 1020. Number of Enclaves
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

func numEnclaves(grid [][]int) int {
	// Initialize the count of enclaved land cells (1s not connected to boundary)
	enclaveCount := 0
	
	// Get grid dimensions
	rows, cols := len(grid), len(grid[0])
	
	// Define movement directions: up, down, left, right
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	// BFS function to mark all connected land cells as water (0)
	// This eliminates land cells that are connected to the boundary
	markConnectedLandAsWater := func(startRow, startCol int) {
		// Mark starting cell as water to avoid revisiting
		grid[startRow][startCol] = 0
		
		// Initialize BFS queue with starting position
		queue := [][]int{{startRow, startCol}}

		// Process all cells in the queue
		for len(queue) > 0 {
			currentLevelSize := len(queue)

			// Process all cells at current BFS level
			for cellIndex := 0; cellIndex < currentLevelSize; cellIndex++ {
				currentCell := queue[cellIndex]
				currentRow, currentCol := currentCell[0], currentCell[1]

				// Check all four directions from current cell
				for _, direction := range directions {
					nextRow := currentRow + direction[0]
					nextCol := currentCol + direction[1]

					// Skip if next position is out of bounds or already water
					if nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || grid[nextRow][nextCol] == 0 {
						continue
					}

					// Add valid land cell to queue and mark as water
					queue = append(queue, []int{nextRow, nextCol})
					grid[nextRow][nextCol] = 0
				}
			}

			// Remove processed cells from queue
			queue = queue[currentLevelSize:]
		}
	}

	// Process top and bottom boundary rows
	// Any land cell on these rows is connected to boundary
	for _, boundaryRow := range []int{0, rows - 1} {
		for colIndex := range grid[boundaryRow] {
			if grid[boundaryRow][colIndex] == 1 {
				markConnectedLandAsWater(boundaryRow, colIndex)
			}
		}
	}

	// Process left and right boundary columns
	// Any land cell on these columns is connected to boundary
	for _, boundaryCol := range []int{0, cols - 1} {
		for rowIndex := 0; rowIndex < rows; rowIndex++ {
			if grid[rowIndex][boundaryCol] == 1 {
				markConnectedLandAsWater(rowIndex, boundaryCol)
			}
		}
	}

	// Count remaining land cells (enclaves)
	// These are land cells not connected to any boundary
	for rowIndex := 1; rowIndex < rows-1; rowIndex++ {
		for colIndex := 1; colIndex < cols-1; colIndex++ {
			if grid[rowIndex][colIndex] == 1 {
				enclaveCount++
			}
		}
	}
	
	return enclaveCount
}
