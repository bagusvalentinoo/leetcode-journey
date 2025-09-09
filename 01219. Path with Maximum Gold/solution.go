/**
 * Problem: 1219. Path with Maximum Gold
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 53 ms (Beats 100%)
 */

func getMaximumGold(grid [][]int) int {
	maxGold := 0 // Initialize the maximum gold collected to zero.

	for row := range grid {
		for col := range grid[row] {
			if grid[row][col] == 0 {
				continue // Skip cells with zero gold.
			}

			// Start DFS from the current cell and update the maximum gold if a higher value is found.
			collectedGold := moveOverGrid(grid, row, col)
			maxGold = max(maxGold, collectedGold)
		}
	}

	// Return the maximum gold collected.
	return maxGold
}

func moveOverGrid(grid [][]int, row, col int) int {
	// Check for out-of-bounds indices.
	if row < 0 || row >= len(grid) {
		return 0
	}
	if col < 0 || col >= len(grid[0]) {
		return 0
	}
	// If the cell contains zero, it cannot be visited.
	if grid[row][col] == 0 {
		return 0
	}

	currentGold := grid[row][col] // Store the gold in the current cell.
	grid[row][col] = 0            // Mark the cell as visited.

	// Recursively collect gold in all four directions.
	leftGold := currentGold + moveOverGrid(grid, row, col-1)
	rightGold := currentGold + moveOverGrid(grid, row, col+1)
	upGold := currentGold + moveOverGrid(grid, row-1, col)
	downGold := currentGold + moveOverGrid(grid, row+1, col)

	// Find the maximum gold collected from all possible paths.
	maxCollectedGold := max(leftGold, rightGold, upGold, downGold)
	grid[row][col] = currentGold // Restore the cell's value for other paths.

	// Return the maximum gold collected from this path.
	return maxCollectedGold
}
