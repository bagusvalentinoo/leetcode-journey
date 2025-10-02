/**
 * Problem: 1254. Number of Closed Islands
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// closedIsland counts the number of closed islands in the given grid.
// A closed island is surrounded by water (1s) and does not touch the grid border.
func closedIsland(grid [][]int) int {
	// Get the number of rows and columns in the grid.
	rowCount, colCount := len(grid), len(grid[0])

	// Initialize the counter for closed islands.
	closedIslandCount := 0

	// Iterate through each cell in the grid.
	for row := 0; row < rowCount; row++ {
		for col := 0; col < colCount; col++ {
			// If the cell is land (0), check if it forms a closed island.
			if grid[row][col] == 0 {
				if isClosedIsland(&grid, row, col) {
					closedIslandCount++
				}
			}
		}
	}

	// Return the total number of closed islands found.
	return closedIslandCount
}

// isClosedIsland performs DFS to determine if the island at (i, j) is closed.
// It marks visited land cells as -1 to avoid revisiting.
func isClosedIsland(grid *[][]int, i, j int) bool {
	// If the cell is out of bounds, the island touches the border and is not closed.
	if i < 0 || i >= len((*grid)) || j < 0 || j >= len((*grid)[0]) {
		return false
	}
	// If the cell is already visited (-1) or water (1), it is considered closed for this path.
	if (*grid)[i][j] == -1 || (*grid)[i][j] == 1 {
		return true
	}

	// Mark the current cell as visited.
	(*grid)[i][j] = -1

	// Recursively check all four directions (up, down, left, right).
	up := isClosedIsland(grid, i-1, j)
	down := isClosedIsland(grid, i+1, j)
	left := isClosedIsland(grid, i, j-1)
	right := isClosedIsland(grid, i, j+1)

	// The island is closed only if all four directions are closed.
	if up && down && left && right {
		return true
	}

	// Otherwise, the island is not closed.
	return false
}
