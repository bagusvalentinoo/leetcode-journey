/**
 * Problem: 909. Snakes and Ladders
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */


// Cell represents a board position with its index and steps taken to reach it
type Cell struct {
	idx, step int
}

func snakesAndLadders(board [][]int) int {
	// Get board size
	n := len(board)
	// Calculate the ending cell index
	target := n * n

	// Converts cell index to board coordinates (row, col)
	idxToPoint := func(i int) (int, int) {
		row, col := (i - 1) / n, (i - 1) % n

		// Adjust column for alternating row directions
		if row % 2 == 1 { col = n - col - 1 }
		
		return n - row - 1, col
	}

	// Track minimum steps to reach each cell
	visited := make([][]int, n)
	for i := range visited {
		visited[i] = make([]int, n)
	}

	// BFS implementation with queue starting at position 1
	queue := []Cell{ Cell {1, 0}}
	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		
		// Try all possible dice rolls (1-6)
		for i := 1; i < 7; i++ {
			nextIdx := current.idx + i

			// Skip if beyond board
			if nextIdx > target { continue }

			row, col := idxToPoint(nextIdx)
			
			// Check for snake or ladder
			if board[row][col] != -1 { 
				nextIdx = board[row][col]
				row, col = idxToPoint(nextIdx)
			}
			// Return if reached target
			if nextIdx == target { return current.step + 1 }
			// Skip if we already found a better or equal path
			if visited[row][col] != 0 && visited[row][col] <= current.step + 1 { continue }

			// Mark this cell as visited with current step count
			visited[row][col] = current.step + 1
			queue = append(queue, Cell { nextIdx, current.step + 1})
		}
	}
	
	// Return -1 if target is unreachable
	return -1
}