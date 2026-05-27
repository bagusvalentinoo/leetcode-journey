/**
 * Problem: 3248. Snake in Matrix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func finalPositionOfSnake(n int, commands []string) int {
	// Initialize snake's starting position at top-left corner (row 0, col 0)
	row, col := 0, 0

	// Process each command in sequence
	for i := 0; i < len(commands); i++ {
		// Move up: decrease row index
		if commands[i] == "UP" {
			row--
		} else if commands[i] == "RIGHT" {
			// Move right: increase column index
			col++
		} else if commands[i] == "DOWN" {
			// Move down: increase row index
			row++
		} else if commands[i] == "LEFT" {
			// Move left: decrease column index
			col--
		}
	}

	// Convert (row, col) to linear index: row * n + col
	return row*n + col
}
