/**
 * Problem: 2946. Matrix Similarity After Cyclic Shifts
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func areSimilar(mat [][]int, k int) bool {
	// Get the number of rows and columns in the matrix
	rows, cols := len(mat), len(mat[0])

	// Check each row in the matrix
	for row := 0; row < rows; row++ {
		// Check each element in current row
		for col := 0; col < cols; col++ {
			// Calculate the shifted column index
			shiftedCol := (col + k) % cols

			// Compare the current element with the shifted element
			if mat[row][col] != mat[row][shiftedCol] {
				return false
			}
		}
	}

	// If all elements are equal to their shifted counterparts, return true
	return true
}
