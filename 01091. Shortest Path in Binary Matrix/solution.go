/**
 * Problem: 1091. Shortest Path in Binary Matrix
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

func shortestPathBinaryMatrix(grid [][]int) int {
	// Get the size of the grid
	n := len(grid)

	// Directions for 8 possible moves (up, down, left, right, and diagonals)
	dirs := []int{-1, -1, 0, 1, 1, 0, -1, 1, -1}

	// Define a struct to represent a cell position in the grid
	type cell struct { row, col int }

	// Initialize the BFS queue
	queue := []cell{}

	// If the starting cell is blocked, return -1
	if grid[0][0] == 1 {
		return -1
	}

	// Add the starting cell to the queue and mark it as visited
	queue = append(queue, cell{0, 0})
	grid[0][0] = 1

	// BFS traversal to find the shortest path
	for steps := 1; len(queue) > 0; steps++ {
		// Process all cells at the current BFS level
		for levelSize := len(queue); levelSize > 0; levelSize-- {
			// Pop the first cell from the queue
			current := queue[0]
			queue = queue[1:]

			// If we've reached the bottom-right cell, return the number of steps
			if current.row == n-1 && current.col == n-1 {
				return steps
			}

			// Explore all 8 directions from the current cell
			for dirIdx := 0; dirIdx < 8; dirIdx++ {
				nextRow, nextCol := current.row + dirs[dirIdx], current.col + dirs[dirIdx+1]

				// Check if the next cell is within bounds and not blocked
				if nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n && grid[nextRow][nextCol] == 0 {
					// Mark the cell as visited and add it to the queue
					grid[nextRow][nextCol] = 1
					queue = append(queue, cell{nextRow, nextCol})
				}
			}
		}
	}

	// If no path is found, return -1
	return -1
}
