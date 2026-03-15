/**
 * Problem: 1314. Matrix Block Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func matrixBlockSum(mat [][]int, k int) [][]int {
	// Get matrix dimensions for iteration boundaries
	rows, cols := len(mat), len(mat[0])

	// Create prefix sum array with extra row and column for easier calculations
	prefixSum := make([][]int, rows+1)

	// Initialize first row of prefix sum with zeros
	for i := range prefixSum {
		prefixSum[i] = make([]int, cols+1)
	}

	// Build prefix sum matrix row by row
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			// Formula: current cell + top cell + left cell - top-left diagonal cell
			// This gives sum of all elements in rectangle from (0,0) to (i,j)
			prefixSum[i+1][j+1] = mat[i][j] + prefixSum[i][j+1] + prefixSum[i+1][j] - prefixSum[i][j]
		}
	}

	// Replace each cell with sum of its k×k block
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			// Calculate block boundaries, clamped to matrix edges
			top, bottom := max(0, i-k), min(rows-1, i+k)
			left, right := max(0, j-k), min(cols-1, j+k)

			// Use inclusion-exclusion principle with prefix sums:
			// Block sum = (bottom-right) - (top-right) - (bottom-left) + (top-left)
			mat[i][j] = prefixSum[bottom+1][right+1] - prefixSum[top][right+1] - prefixSum[bottom+1][left] + prefixSum[top][left]
		}
	}

	// Return the modified matrix with block sums
	return mat
}
