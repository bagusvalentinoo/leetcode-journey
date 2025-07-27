/**
 * Problem: 1074. Number of Submatrices That Sum to Target
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 65 ms (Beats 100%)
 */

func numSubmatrixSumTarget(matrix [][]int, target int) int {
	// Get the number of rows (m) and columns (n) in the matrix
	m, n := len(matrix), len(matrix[0])
	// Initialize the result counter for submatrices that sum to target
	res := 0

	// Iterate over all possible left column boundaries
	for left := 0; left < n; left++ {
		// Initialize an array to store the cumulative sum of each row between columns
		rowSums := make([]int, 105)

		// Iterate over all possible right column boundaries
		for right := left; right < n; right++ {
			// Update rowSums by adding values from the current column (right)
			for row := 0; row < m; row++ {
				rowSums[row] += matrix[row][right]
			}

			// For each possible starting row of the submatrix
			for startRow := 0; startRow < m; startRow++ {
				// Initialize sum for the current submatrix
				submatrixSum := 0

				// For each possible ending row of the submatrix
				for endRow := startRow; endRow < m; endRow++ {
					// Add the value from rowSums to the current submatrix sum
					submatrixSum += rowSums[endRow]

					// If the submatrix sum equals the target, increment the result counter
					if submatrixSum == target {
						res++
					}
				}
			}
		}
	}

	// Return the total count of submatrices that sum to target
	return res
}
