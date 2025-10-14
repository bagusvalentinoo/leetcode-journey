/**
 * Problem: 1275. Find Winner on a Tic Tac Toe Game
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func tictactoe(moves [][]int) string {
	// Initialize a 3x3 grid to represent the Tic Tac Toe board.
	board := [3][3]int{}

	// Iterate over each move and mark the board for each player.
	for moveIndex, move := range moves {
		// Player 1 uses 1, Player 2 uses 2. Assign based on move index.
		board[move[0]][move[1]] = (moveIndex & 1) + 1
	}

	// Check for a winner in rows and columns.
	for i := 0; i < 3; i++ {
		// Get the player at the diagonal position.
		player := board[i][i]
		// If the cell is not empty, check for winning conditions.
		if player != 0 {
			// Check if all cells in the row or column are the same player.
			if (board[i][0] == board[i][1] && board[i][0] == board[i][2]) ||
				(board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
				// Return the winner as "A" or "B".
				return string(byte('@' + player))
			}
		}
	}

	// Check for a winner in the diagonals.
	player := board[1][1]
	// If the center cell is not empty, check both diagonals.
	if player != 0 {
		if (board[0][0] == board[2][2] && board[0][0] == player) ||
			(board[2][0] == board[0][2] && board[2][0] == player) {
			// Return the winner as "A" or "B".
			return string(byte('@' + player))
		}
	}

	// If there are still moves left, the game is pending.
	if len(moves) != 9 {
		return "Pending"
	}

	// If all cells are filled and no winner, the game is a draw.
	return "Draw"
}
