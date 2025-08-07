/**
 * Problem: 3363. Find the Maximum Number of Fruits Collected
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

func maxCollectedFruits(fruits [][]int) int {
	// Get the number of fruit types (matrix size)
	n := len(fruits)

	// Initialize the answer to accumulate the result
	ans := 0

	// Sum the diagonal elements (collecting fruits from the same type)
	for i := 0; i < n; i++ {
		ans += fruits[i][i]
	}

	// Define a helper function to perform dynamic programming for max collection
	dp := func() int {
		// prev and curr store the DP states for previous and current rows
		prev, curr := make([]int, n), make([]int, n)

		// Initialize prev with minimum integer values
		for i := range prev {
			prev[i] = math.MinInt
		}

		// Set the starting position for DP
		prev[n-1] = fruits[0][n-1]

		// Iterate through each row (except the first and last)
		for i := 1; i < n-1; i++ {
			// Reset curr for the current row
			for j := range curr {
				curr[j] = math.MinInt
			}

			// Iterate through possible columns for the current row
			for j := max(n-1-i, i+1); j < n; j++ {
				// Initialize best with the value from the previous row, same column
				best := prev[j]

				// Check left neighbor in the previous row
				if j-1 >= 0 {
					best = max(best, prev[j-1])
				}
				// Check right neighbor in the previous row
				if j+1 < n {
					best = max(best, prev[j+1])
				}

				// Update current DP state with the best value plus current fruit
				curr[j] = best + fruits[i][j]
			}

			// Swap prev and curr for the next iteration
			prev, curr = curr, prev
		}

		// Return the result from the last row, last column
		return prev[n-1]
	}

	// Add the result of the first DP run to the answer
	ans += dp()

	// Transpose the matrix to consider the other direction
	for i := 0; i < n; i++ {
		for j := 0; j < i; j++ {
			fruits[i][j], fruits[j][i] = fruits[j][i], fruits[i][j]
		}
	}

	// Add the result of the second DP run (on the transposed matrix)
	ans += dp()
	
	// Return the total maximum number of fruits collected
	return ans
}
