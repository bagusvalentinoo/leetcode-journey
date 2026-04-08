/**
 * Problem: 1329. Sort the Matrix Diagonally
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func diagonalSort(mat [][]int) [][]int {
	// Get matrix dimensions
	rows, cols := len(mat), len(mat[0])

	// Helper function to sort a single diagonal starting at (row, col)
	sortDiagonal := func(startRow, startCol int) {
		// Slice to store values from the diagonal
		diagonalValues := make([]int, 0)

		// Temporary pointers to traverse the diagonal
		currentRow, currentCol := startRow, startCol

		// Collect all values from the diagonal
		for currentRow < rows && currentCol < cols {
			// Add current cell value to slice
			diagonalValues = append(diagonalValues, mat[currentRow][currentCol])

			// Move to next cell along the diagonal
			currentRow++
			currentCol++
		}

		// Sort the diagonal values in ascending order
		sort.Ints(diagonalValues)

		// Reset pointers to traverse the diagonal again
		currentRow = startRow
		currentCol = startCol

		// Index to track position in sorted slice
		index := 0

		// Place sorted values back into the diagonal
		for currentRow < rows && currentCol < cols {
			// Assign sorted value to current cell
			mat[currentRow][currentCol] = diagonalValues[index]
			index++

			// Move to next cell along the diagonal
			currentRow++
			currentCol++
		}
	}

	// Sort all diagonals starting from first column (left edge)
	for i := 0; i < rows; i++ {
		sortDiagonal(i, 0)
	}

	// Sort all diagonals starting from first row (top edge), skipping (0,0) already done
	for j := 1; j < cols; j++ {
		sortDiagonal(0, j)
	}

	// Return the matrix with sorted diagonals
	return mat
}
