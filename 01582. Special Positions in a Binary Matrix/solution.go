/**
 * Problem: 1582. Special Positions in a Binary Matrix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numSpecial(mat [][]int) int {
	// Initialize the count of special positions
	specialCount := 0

	// Check each row for potential special positions
	for row := 0; row < len(mat); row++ {
		// Find the column index of the single 1 in the current row
		columnIndex := findUniqueOneInRow(mat, row)

		// If row has exactly one 1 and that column has only that 1, count it
		if columnIndex >= 0 && isColumnUnique(mat, row, columnIndex) {
			specialCount++
		}
	}

	// Return the count of special positions
	return specialCount
}

// Finds column index if row has exactly one 1, otherwise returns -1
func findUniqueOneInRow(mat [][]int, row int) int {
	// Initialize the column index of the single 1 to -1
	foundColumn := -1

	// Scan through columns in current row
	for col := 0; col < len(mat[0]); col++ {
		// If a 1 is found in the current column
		if mat[row][col] == 1 {
			// If already found a 1, this row has multiple 1s
			if foundColumn >= 0 {
				return -1
			}

			// Store the column index of the first 1 found
			foundColumn = col
		}
	}

	// Return the column index of the single 1, or -1 if none or multiple
	return foundColumn
}

// Checks if a column has only one 1 (at the specified row)
func isColumnUnique(mat [][]int, row int, col int) bool {
	// Check all rows in this column
	for r := 0; r < len(mat); r++ {
		// If another row has a 1 in this column, it's not unique
		if mat[r][col] == 1 && r != row {
			return false
		}
	}

	// If no other row has a 1 in this column, it's unique
	return true
}
