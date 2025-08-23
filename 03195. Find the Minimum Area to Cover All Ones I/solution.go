/**
 * Problem: 3195. Find the Minimum Area to Cover All Ones I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 258 ms (Beats 100%)
 */

func minimumArea(grid [][]int) int {
	// Get the number of rows and columns in the grid
	row := len(grid)
	col := len(grid[0])

	// Initialize the beginning and ending indices for rows and columns
	// Set rowBeg and colBeg to max possible values, rowEnd and colEnd to min possible values
	rowBeg, colBeg := row, col
	rowEnd, colEnd := 0, 0

	// Find the first row that contains a '1'
	for i := range row {
		for j := range col {
			if grid[i][j] == 1 {
				rowBeg = i // Set rowBeg to the index of the first row with '1'
				goto next // Exit both loops once found
			}
		}
	}
next:
	// Find the first column that contains a '1'
	for j := range col {
		for i := range row {
			if grid[i][j] == 1 {
				colBeg = j // Set colBeg to the index of the first column with '1'
				goto next2 // Exit both loops once found
			}
		}
	}
next2:
	// Find the last row that contains a '1'
	for i := row - 1; i >= 0; i-- {
		for j := col - 1; j >= 0; j-- {
			if grid[i][j] == 1 {
				rowEnd = i // Set rowEnd to the index of the last row with '1'
				goto next3 // Exit both loops once found
			}
		}
	}
next3:
	// Find the last column that contains a '1'
	for j := col - 1; j >= 0; j-- {
		for i := row - 1; i >= 0; i-- {
			if grid[i][j] == 1 {
				colEnd = j // Set colEnd to the index of the last column with '1'
				goto next4 // Exit both loops once found
			}
		}
	}
next4:
	// Calculate and return the area of the rectangle covering all '1's
	return (rowEnd - rowBeg + 1) * (colEnd - colBeg + 1)
}
