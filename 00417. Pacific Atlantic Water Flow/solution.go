/**
 * Problem: 417. Pacific Atlantic Water Flow
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func pacificAtlantic(heights [][]int) [][]int {
	// directions defines the four possible moves: down, up, right, left.
	directions := [][]int{
		{1, 0},
		{-1, 0},
		{0, 1},
		{0, -1},
	}

	// rows and cols store the dimensions of the heights matrix.
	rows, cols := len(heights), len(heights[0])

	// pacificReachable and atlanticReachable track cells reachable from each ocean.
	pacificReachable, atlanticReachable := make([][]bool, rows), make([][]bool, rows)

	// Initialize the reachability matrices for both oceans.
	for i := range pacificReachable {
		pacificReachable[i] = make([]bool, cols)
		atlanticReachable[i] = make([]bool, cols)
	}

	// dfs recursively marks cells that can reach a given ocean.
	var dfs func(row, col int, visited [][]bool)
	dfs = func(row, col int, visited [][]bool) {
		// Return if out of bounds or already visited.
		if row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col] {
			return
		}

		// Mark the current cell as visited.
		visited[row][col] = true

		// Explore all four directions from the current cell.
		for _, dir := range directions {
			newRow, newCol := row+dir[0], col+dir[1]

			// Check bounds and if the next cell is higher or equal.
			if newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols {
				if heights[newRow][newCol] >= heights[row][col] {
					dfs(newRow, newCol, visited)
				}
			}
		}
	}

	// Start DFS from all cells adjacent to the Pacific ocean (top and left edges).
	for col := 0; col < cols; col++ {
		dfs(0, col, pacificReachable)
	}
	for row := 0; row < rows; row++ {
		dfs(row, 0, pacificReachable)
	}

	// Start DFS from all cells adjacent to the Atlantic ocean (bottom and right edges).
	for col := 0; col < cols; col++ {
		dfs(rows-1, col, atlanticReachable)
	}
	for row := 0; row < rows; row++ {
		dfs(row, cols-1, atlanticReachable)
	}

	// result collects coordinates reachable by both oceans.
	result := [][]int{}

	// Add coordinates to result if reachable by both oceans.
	for row := 0; row < rows; row++ {
		for col := 0; col < cols; col++ {
			if pacificReachable[row][col] && atlanticReachable[row][col] {
				result = append(result, []int{row, col})
			}
		}
	}

	// Return the list of coordinates.
	return result
}
