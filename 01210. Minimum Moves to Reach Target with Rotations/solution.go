/**
 * Problem: 1210. Minimum Moves to Reach Target with Rotations
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

func minimumMoves(grid [][]int) int {
	// Get the size of the grid
	n := len(grid)

	// Define a struct to represent a pair of positions (snake's head and tail)
	type positionPair struct{ head, tail int }

	// Calculate the target position (snake's head and tail indices for the bottom-right cell)
	target := positionPair{n*n - 2, n*n - 1}

	// Initialize the BFS queue with the starting position (snake at top-left horizontal)
	queue := []positionPair{{0, 1}}

	// vis[a][status]: visited state for position 'a' and orientation 'status' (0: horizontal, 1: vertical)
	visited := make([][2]bool, n*n)

	// Mark the initial position as visited (horizontal orientation)
	visited[0][0] = true

	// Helper function to attempt moving the snake to a new position
	move := func(row1, col1, row2, col2 int) {
		// Check if both positions are within grid bounds
		if row1 >= 0 && row1 < n && col1 >= 0 && col1 < n && row2 >= 0 && row2 < n && col2 >= 0 && col2 < n {
			// Convert 2D positions to 1D indices
			headIdx, tailIdx := row1*n+col1, row2*n+col2

			// Determine orientation: 0 for horizontal, 1 for vertical
			orientation := 1
			if row1 == row2 {
				orientation = 0
			}

			// If not visited and both cells are empty, add to queue and mark as visited
			if !visited[headIdx][orientation] && grid[row1][col1] == 0 && grid[row2][col2] == 0 {
				queue = append(queue, positionPair{headIdx, tailIdx})
				visited[headIdx][orientation] = true
			}
		}
	}

	// Initialize the answer (number of moves)
	moves := 0

	// BFS loop: process all positions in the queue
	for len(queue) > 0 {
		// Process all positions at the current BFS level
		for k := len(queue); k > 0; k-- {
			// Pop the front position from the queue
			current := queue[0]
			queue = queue[1:]

			// If reached the target position, return the number of moves
			if current == target {
				return moves
			}

			// Decode 1D indices to 2D grid positions
			headIdx, tailIdx := current.head, current.tail
			row1, col1 := headIdx/n, headIdx%n
			row2, col2 := tailIdx/n, tailIdx%n

			// Try moving right
			move(row1, col1+1, row2, col2+1)
			// Try moving down
			move(row1+1, col1, row2+1, col2)

			// Try rotating clockwise (horizontal to vertical)
			if row1 == row2 && row1+1 < n && grid[row1+1][col2] == 0 {
				move(row1, col1, row1+1, col1)
			}
			// Try rotating counterclockwise (vertical to horizontal)
			if col1 == col2 && col1+1 < n && grid[row2][col1+1] == 0 {
				move(row1, col1, row1, col1+1)
			}
		}

		// Increment the move count after processing one BFS level
		moves++
	}

	// If the target is unreachable, return -1
	return -1
}
