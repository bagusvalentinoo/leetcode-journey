/**
 * Problem: 1138. Alphabet Board Path
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func alphabetBoardPath(target string) string {
	// Convert the target string to a slice of runes for Unicode safety.
	chars := []rune(target)
	// Initialize a slice to store the result path as runes.
	res := []rune{}
	// Start position at the top-left corner of the board (row 0, column 0).
	currRow := 0
	currCol := 0

	// Iterate over each character in the target string.
	for idx := 0; idx < len(chars); idx++ {
		// Calculate the board position (row and column) for the current character.
		pos := int(chars[idx] - 'a')
		nextRow := pos / 5
		nextCol := pos % 5

		// Move up ('U') to the target row if needed.
		move('U', &res, currRow-nextRow)
		// Move left ('L') to the target column if needed.
		move('L', &res, currCol-nextCol)
		// Move down ('D') to the target row if needed.
		move('D', &res, nextRow-currRow)
		// Move right ('R') to the target column if needed.
		move('R', &res, nextCol-currCol)

		// Add '!' to indicate the character is selected.
		res = append(res, '!')
		// Update the current position to the new character's position.
		currRow = nextRow
		currCol = nextCol
	}

	// Convert the result rune slice back to a string and return.
	return string(res)
}

// move appends the given direction rune to the result slice a specified number of times.
func move(direction rune, result *[]rune, steps int) {
	// Only append if steps is positive.
	for steps > 0 {
		*result = append(*result, direction)
		steps--
	}
}
