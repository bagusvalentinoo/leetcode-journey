/**
 * Problem: 73. Set Matrix Zeroes
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func setZeroes(matrix [][]int)  {
	// Get the dimensions of the matrix
	rows, cols := len(matrix), len(matrix[0])
	// Create arrays to track which rows and columns need to be zeroed
	zeroRows, zeroCols := make([]int, rows), make([]int, cols)

	// First pass: identify rows and columns that contain zeros
	for i, row := range matrix {
		for j, elem := range row {
			if elem == 0 {
				zeroRows[i] = 1
				zeroCols[j] = 1
			}
		}
	}

	// Second pass: set identified rows and columns to zero
	for i, row := range matrix {
		for j := range row {
			if zeroRows[i] == 1 || zeroCols[j] == 1 {
				matrix[i][j] = 0
			}
		}
	}
}