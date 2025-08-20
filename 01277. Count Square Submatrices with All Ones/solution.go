/**
 * Problem: 1277. Count Square Submatrices with All Ones
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countSquares(matrix [][]int) int {
	// Get the number of rows in the matrix
	rowCount := len(matrix)
	
	// If the matrix is empty, return 0 as there are no squares
	if rowCount == 0 {
		return 0
	}

	// Get the number of columns in the matrix
	colCount := len(matrix[0])
	// Initialize the total count of square submatrices
	totalSquares := 0

	// Iterate through each cell in the matrix
	for i := 0; i < rowCount; i++ {
		for j := 0; j < colCount; j++ {
			// If the current cell is 1 and not in the first row or column
			if matrix[i][j] == 1 && i > 0 && j > 0 {
				// Find the minimum value among the top, left, and top-left neighbors
				minNeighbor := matrix[i-1][j]
				if matrix[i][j-1] < minNeighbor {
					minNeighbor = matrix[i][j-1]
				}
				if matrix[i-1][j-1] < minNeighbor {
					minNeighbor = matrix[i-1][j-1]
				}
				// Update the current cell with the size of the largest square ending here
				matrix[i][j] = 1 + minNeighbor
			}
			// Add the value of the current cell to the total count
			totalSquares += matrix[i][j]
		}
	}

	// Return the total number of square submatrices with all ones
	return totalSquares
}
