/**
 * Problem: 1301. Number of Paths with Max Score
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func pathsWithMaxScore(board []string) []int {
	// Create DP array: each element stores [maxScore, pathCount]
	dp := make([][][2]int, len(board))

	// Initialize DP array with [0, 0]
	for i := range dp {
		dp[i] = make([][2]int, len(board))
	}

	// Initialize bottom-right cell
	dp[len(board)-1][len(board)-1] = [2]int{0, 1}

	// Helper function to update DP values from previous cell
	calculate := func(row, col, prevRow, prevCol, score int, dp [][][2]int) {
		// Skip if previous cell has no paths
		if dp[prevRow][prevCol][1] == 0 {
			return
		}

		// Calculate new score
		newScore := dp[prevRow][prevCol][0] + score

		// Update if new score is better
		if newScore > dp[row][col][0] {
			dp[row][col][0] = newScore
			dp[row][col][1] = dp[prevRow][prevCol][1]
		} else if newScore == dp[row][col][0] {
			// If equal score, add path counts
			dp[row][col][1] += dp[prevRow][prevCol][1]
		}
	}

	// Process grid from bottom-right to top-left
	for row := len(board) - 1; row >= 0; row-- {
		for col := len(board) - 1; col >= 0; col-- {
			// Skip obstacles
			if board[row][col] == 'X' {
				continue
			}

			// Get score for current cell
			score := 0

			// If current cell is not 'E', get score
			if board[row][col] >= '1' && board[row][col] <= '9' {
				score = int(board[row][col] - '0')
			}

			// Check all three possible previous positions

			// From right
			if prevRow, prevCol := row, col+1; prevRow < len(board) && prevCol < len(board) {
				calculate(row, col, prevRow, prevCol, score, dp)
			}
			// From down
			if prevRow, prevCol := row+1, col; prevRow < len(board) && prevCol < len(board) {
				calculate(row, col, prevRow, prevCol, score, dp)
			}
			// From diagonal
			if prevRow, prevCol := row+1, col+1; prevRow < len(board) && prevCol < len(board) {
				calculate(row, col, prevRow, prevCol, score, dp)
			}

			// Apply modulo to path count
			dp[row][col][1] %= 1000000007
		}
	}

	// Return max score and path count at top-left
	return []int{dp[0][0][0], dp[0][0][1]}
}
