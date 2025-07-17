/**
 * Problem: 1034. Coloring A Border
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func colorBorder(grid [][]int, row int, col int, color int) [][]int {
	// Early return if the starting cell already has the target color
	if grid[row][col] == color {
		return grid
	}

	// Initialize slice to store border cells that need to be colored
	border := [][]int{}
	// Define four directions: right, down, left, up
	directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	// Initialize BFS queue with starting position
	queue := [][]int{{row, col}}
	// Track processed cells to avoid revisiting
	processed := make(map[[2]int]bool)

	// BFS traversal to find all border cells
	for len(queue) > 0 {
		// Dequeue the first element
		current := queue[0]
		queue = queue[1:]
		r, c := current[0], current[1]

		// Skip if cell is already processed
		if processed[[2]int{r, c}] {
			continue
		}

		// Flag to determine if current cell is on the border
		isBorder := false

		// Check all four directions from current cell
		for _, d := range directions {
			newRow, newCol := r+d[0], c+d[1]

			// Check if neighbor is out of bounds or has different color
			if newRow < 0 || newRow >= len(grid) || newCol < 0 || newCol >= len(grid[0]) || grid[newRow][newCol] != grid[row][col] {
				// Current cell is on border if any neighbor is out of bounds or different color
				isBorder = true

				continue
			}

			// Skip if neighbor is already processed
			if processed[[2]int{newRow, newCol}] {
				continue
			}

			// Add unprocessed same-color neighbor to queue
			queue = append(queue, []int{newRow, newCol})
		}

		// Add current cell to border list if it's on the border
		if isBorder {
			border = append(border, []int{r, c})
		}
		
		// Mark current cell as processed
		processed[[2]int{r, c}] = true
	}

	// Color all border cells with the target color
	for _, b := range border {
		grid[b[0]][b[1]] = color
	}

	// Return the modified grid
	return grid
}
