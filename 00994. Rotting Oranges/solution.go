/**
 * Problem: 994. Rotting Oranges
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Four possible movement directions: right, left, down, up
var directions = [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

const (
	Fresh  = 1
	Rotten = 2
)

func orangesRotting(grid [][]int) int {
	// Get grid dimensions
	rows, cols := len(grid), len(grid[0])
	// Queue to store positions of rotten oranges
	var rottenQueue [][2]int

	// Count fresh oranges and collect initial rotten oranges
	freshCount := 0
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			switch grid[i][j] {
			case Fresh:
				freshCount++
			case Rotten:
				rottenQueue = append(rottenQueue, [2]int{i, j})
			}
		}
	}

	// No fresh oranges means no time needed
	if freshCount == 0 {
		return 0
	}

	// BFS to rot oranges minute by minute
	minutes := 0
	for len(rottenQueue) > 0 {
		// Process all currently rotten oranges
		for _, orange := range rottenQueue {
			for _, dir := range directions {
				// Calculate adjacent cell position
				newRow, newCol := orange[0]+dir[0], orange[1]+dir[1]

				// If adjacent cell is valid and has a fresh orange, rot it
				if newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] == Fresh {
					grid[newRow][newCol] = Rotten
					rottenQueue = append(rottenQueue, [2]int{newRow, newCol})
					freshCount--
				}
			}

			// Remove processed orange from queue
			rottenQueue = rottenQueue[1:]
		}

		// Increment time after processing all oranges at current minute
		minutes++
		
		// If all oranges are rotten, return elapsed time
		if freshCount == 0 {
			return minutes
		}
	}

	// Return -1 if some oranges never rot
	return -1
}