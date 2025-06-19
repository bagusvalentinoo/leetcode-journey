/**
 * Problem: 36. Valid Sudoku
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isValidSudoku(board [][]byte) bool {
	// Initialize bitmasks to track used digits in rows, columns, and 3x3 squares
	rowMasks := make([]int, 9)
	colMasks := make([]int, 9)
	squareMasks := make([]int, 9)

	for r := 0; r < 9; r++ {
		for c := 0; c < 9; c++ {
			// Skip empty cells
			if board[r][c] == '.' {
				continue
			}

			// Convert character to bit position (0-8)
			val := board[r][c] - '1'

			// Check if digit already exists in current row, column, or square
			if rowMasks[r]&(1<<val) != 0 || colMasks[c]&(1<<val) != 0 ||
				squareMasks[(r/3)*3+(c/3)]&(1<<val) != 0 {
				return false
			}

			// Mark digit as used in current row, column, and square
			rowMasks[r] |= 1 << val
			colMasks[c] |= 1 << val
			squareMasks[(r/3)*3+(c/3)] |= 1 << val
		}
	}

	return true
}
