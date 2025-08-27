/**
 * Problem: 3459. Length of Longest V-Shaped Diagonal Segment
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 149 ms (Beats 100%)
 */

func lenOfVDiagonal(grid [][]int) int {
	// Define directions for diagonals: down-right, down-left, up-left, up-right
	dirs := [4][2]int{{1, 1}, {1, -1}, {-1, -1}, {-1, 1}}
	// Get grid dimensions
	rowCount, colCount := len(grid), len(grid[0])
	// Initialize memoization table for DFS results
	memo := make([][][4][2]int, rowCount)
	
	for i := range memo {
		// For each row, create a slice for columns
		memo[i] = make([][4][2]int, colCount)
		for j := range memo[i] {
			// For each cell, initialize all direction/turn states to -1
			for dirIdx := range memo[i][j] {
				for turnIdx := range memo[i][j][dirIdx] {
					memo[i][j][dirIdx][turnIdx] = -1
				}
			}
		}
	}

	// Depth-first search to find longest V-shaped diagonal segment
	var dfs func(x, y, dirIdx int, canTurn bool, targetVal int) int
	dfs = func(x, y, dirIdx int, canTurn bool, targetVal int) int {
		// Calculate next cell coordinates in the current direction
		nextX, nextY := x+dirs[dirIdx][0], y+dirs[dirIdx][1]
		// Check bounds and value match
		if nextX < 0 || nextY < 0 || nextX >= rowCount || nextY >= colCount || grid[nextX][nextY] != targetVal {
			return 0
		}
		
		// Convert boolean turn flag to integer for memoization index
		turnFlag := 0
		if canTurn {
			turnFlag = 1
		}
		// Return memoized result if available
		if memo[nextX][nextY][dirIdx][turnFlag] != -1 {
			return memo[nextX][nextY][dirIdx][turnFlag]
		}

		// Continue DFS in the same direction
		maxLength := dfs(nextX, nextY, dirIdx, canTurn, 2-targetVal)
		// If turn is allowed, try turning to the next direction
		if canTurn {
			maxLength = max(maxLength, dfs(nextX, nextY, (dirIdx+1)%4, false, 2-targetVal))
		}

		// Memoize and return the result
		memo[nextX][nextY][dirIdx][turnFlag] = maxLength + 1
		return maxLength + 1
	}

	// Variable to store the result (maximum segment length)
	maxSegment := 0
	
	// Iterate over all cells in the grid
	for i := 0; i < rowCount; i++ {
		for j := 0; j < colCount; j++ {
			// Start DFS from cells with value 1
			if grid[i][j] == 1 {
				for dirIdx := 0; dirIdx < 4; dirIdx++ {
					// Try all directions and update the result
					maxSegment = max(maxSegment, dfs(i, j, dirIdx, true, 2)+1)
				}
			}
		}
	}

	// Return the length of the longest V-shaped diagonal segment
	return maxSegment
}
