/**
 * Problem: 3446. Sort Matrix by Diagonals
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sortMatrix(grid [][]int) [][]int {
	// Get the size of the matrix
	n := len(grid)

	// Iterate over each diagonal starting from the first column (excluding the last row)
	for row := 0; row < n-1; row++ {
		// Collect elements along the current diagonal into a temporary slice
		diagonal := make([]int, 0)
		curRow, curCol := row, 0

		// Traverse the diagonal and append elements to the slice
		for curRow < n && curCol < n {
			diagonal = append(diagonal, grid[curRow][curCol])
			curRow++
			curCol++
		}

		// Sort the diagonal in descending order
		slices.SortFunc(diagonal, func(a, b int) int {
			return b - a
		})

		// Write the sorted values back to the matrix along the same diagonal
		curRow, curCol = row, 0
		index := 0
		for curRow < n && curCol < n {
			grid[curRow][curCol] = diagonal[index]
			index++
			curRow++
			curCol++
		}
	}

	// Iterate over each diagonal starting from the first row (excluding the first column and last column)
	for col := 1; col < n-1; col++ {
		// Collect elements along the current diagonal into a temporary slice
		diagonal := make([]int, 0)
		curRow, curCol := 0, col

		// Traverse the diagonal and append elements to the slice
		for curRow < n && curCol < n {
			diagonal = append(diagonal, grid[curRow][curCol])
			curRow++
			curCol++
		}

		// Sort the diagonal in ascending order
		slices.SortFunc(diagonal, func(a, b int) int {
			return a - b
		})

		// Write the sorted values back to the matrix along the same diagonal
		curRow, curCol = 0, col
		index := 0
		for curRow < n && curCol < n {
			grid[curRow][curCol] = diagonal[index]
			index++
			curRow++
			curCol++
		}
	}
	
	// Return the sorted matrix
	return grid
}
