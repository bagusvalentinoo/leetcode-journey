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
	// Get the dimensions of the matrix.
	m, n := len(mat), len(mat[0])

	// Precompute the prefix sum for the matrix.
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			// If we are at the first row, accumulate horizontally.
			if i == 0 {
				if j == 0 {
					continue
				}
				mat[i][j] += mat[i][j-1]
			} else if j == 0 {
				// If we are at the first column, accumulate vertically.
				mat[i][j] += mat[i-1][j]
			} else {
				// For other cells, calculate the prefix sum using the
				// inclusion-exclusion principle.
				mat[i][j] += mat[i-1][j] + mat[i][j-1] - mat[i-1][j-1]
			}
		}
	}

	// Initialize the result variable to store the maximum side length.
	var res int

	// Define the binary search range for the side length.
	left, right := 1, min(m, n)

	// Perform binary search to find the maximum valid side length.
	for left <= right {
		// Calculate the middle value of the current range.
		mid := left + (right-left)/2

		// Check if a square of side length `mid` is possible.
		if possible(mat, threshold, mid) {
			// Update the result and adjust the search range.
			res = max(res, mid)
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	// Return the maximum side length found.
	return res
}

func possible(mat [][]int, threshold int, side int) bool {
	// Iterate over all possible top-left corners of the square.
	for i := side - 1; i < len(mat); i++ {
		for j := side - 1; j < len(mat[i]); j++ {
			// Calculate the sum of the square using the prefix sum matrix.
			sum := mat[i][j]

			// Subtract the area above the square if it exists.
			if i-side >= 0 {
				sum -= mat[i-side][j]
			}
			// Subtract the area to the left of the square if it exists.
			if j-side >= 0 {
				sum -= mat[i][j-side]
			}
			// Add back the overlapping area if it exists.
			if i-side >= 0 && j-side >= 0 {
				sum += mat[i-side][j-side]
			}
			// Check if the sum is within the threshold.
			if sum <= threshold {
				return true
			}
		}
	}

	// Return false if no valid square is found.
	return false
}
