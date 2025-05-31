/**
 * Problem: 999. Available Captures for Rook
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numRookCaptures(board [][]byte) int {
	// Initialize rook position coordinates
	var rookRow, rookCol int

	// Find the position of the Rook on the board
	for i := 0; i < 8; i++ {
		for j := 0; j < 8; j++ {
			if board[i][j] == 'R' {
				rookRow, rookCol = i, j
				break
			}
		}
	}

	// Define the four directions: up, down, left, right
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	captureCount := 0

	// Check each direction for possible captures
	for _, dir := range directions {
		row, col := rookRow+dir[0], rookCol+dir[1]

		// Continue in current direction until edge or piece is found
		for row >= 0 && row < 8 && col >= 0 && col < 8 {
			if board[row][col] == 'B' {
				break
			}
			if board[row][col] == 'p' {
				captureCount++
				break
			}
			
			row += dir[0]
			col += dir[1]
		}
	}

	return captureCount
}