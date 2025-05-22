/**
 * Problem: 980. Unique Paths III
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func uniquePathsIII(grid [][]int) int {
	// Count empty cells and find starting position
	emptyCellCount, startRow, startCol := 0, 0, 0
	
	// Iterate through the grid to find empty cells and starting position
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == 0 {
				emptyCellCount++
			} else if grid[i][j] == 1 {
				startRow = i
				startCol = j
			}
		}
	}
		
	// Start DFS from starting position with count of cells to visit
	return uniquePathHelper(grid, emptyCellCount, startRow, startCol)
}

func uniquePathHelper(grid [][]int, remaining, row, col int) int {
	// Initialize path count
	pathCount := 0
	
	// Check if position is invalid or already visited
	if row < 0 || row == len(grid) || col < 0 || col == len(grid[row]) || grid[row][col] == -1 {
		return 0
	} else if grid[row][col] == 0 || grid[row][col] == 1 {
		// Mark current cell as visited
		grid[row][col] = -1

		// Explore all four directions
		pathCount = uniquePathHelper(grid, remaining-1, row-1, col) + 
					uniquePathHelper(grid, remaining-1, row+1, col) +
					uniquePathHelper(grid, remaining-1, row, col+1) +
					uniquePathHelper(grid, remaining-1, row, col-1)

		// Backtrack: restore cell to its original state
		grid[row][col] = 0
	} else if grid[row][col] == 2 && remaining < 0 {
		// Found ending position with all empty cells visited
		return 1
	} 
	
	return pathCount
}