/**
 * Problem: 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxSideLength(mat [][]int, threshold int) int {
	// Get matrix dimensions
	m, n := len(mat), len(mat[0])

	// Create prefix sum matrix with extra row/column
	prefixSum := make([][]int, m+1)
	for i := range prefixSum {
		prefixSum[i] = make([]int, n+1)
	}

	// Build 2D prefix sum matrix
	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			// Calculate cumulative sum using inclusion-exclusion
			prefixSum[i][j] = prefixSum[i-1][j] + prefixSum[i][j-1] -
				prefixSum[i-1][j-1] + mat[i-1][j-1]
		}
	}

	// Helper function to get sum of any submatrix in O(1)
	getSubmatrixSum := func(x1, y1, x2, y2 int) int {
		return prefixSum[x2][y2] - prefixSum[x1-1][y2] -
			prefixSum[x2][y1-1] + prefixSum[x1-1][y1-1]
	}

	// Maximum possible square side limited by matrix dimensions
	maxPossibleSide := min(m, n)

	// Track best square side found
	bestSide := 0

	// Try all possible starting positions
	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			// Try squares larger than current best
			for side := bestSide + 1; side <= maxPossibleSide; side++ {
				// Check if square fits within matrix boundaries
				endRow := i + side - 1
				endCol := j + side - 1

				if endRow > m || endCol > n {
					break
				}

				// Calculate sum of current square
				squareSum := getSubmatrixSum(i, j, endRow, endCol)

				// Update best side if sum ≤ threshold
				if squareSum <= threshold {
					bestSide = side
				} else {
					break // Larger squares will have larger sums
				}
			}
		}
	}

	return bestSide
}
