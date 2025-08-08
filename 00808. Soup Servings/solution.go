/**
 * Problem: 808. Soup Servings
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func soupServings(n int) float64 {
	// If n is 0, both soups are empty, so return 0.5 as per problem statement.
	if n == 0 {
		return 0.5
	}
	// For large n, the probability approaches 1.0 due to the law of large numbers.
	if n > 4800 {
		return 1.0
	}

	// Convert n to units of 25 ml, rounding up.
	m := (n + 24) / 25

	// Initialize a 2D slice to store probabilities for dynamic programming.
	dp := make([][]float64, m)
	for i := range dp {
		dp[i] = make([]float64, 4)
	}

	// forwardUpdate updates the dp table for each possible serving operation.
	// It returns the probability that soup A is empty first or both are empty at the same time.
	forwardUpdate := func(a, b int) float64 {
		subResult := 0.0 // Accumulates the result for this update.

		// Probability of current state.
		p := dp[b][a&3] * 0.25

		// Reset the current state probability after using it.
		dp[b][a&3] = 0.0

		// Iterate over the four possible serving operations.
		for move := 1; move <= 4; move++ {
			dstA := a + move         // Amount of soup A served.
			dstB := b + (4 - move)   // Amount of soup B served.

			// If both soups are not empty, update the dp table.
			if dstA < m && dstB < m {
				dp[dstB][dstA&3] += p
			} else if m <= dstA {
				// If soup A is empty first.
				if dstB < m {
					subResult += p
				} else {
					// If both soups are empty at the same time.
					subResult += p * 0.5
				}
			}
		}

		return subResult
	}

	result := 0.0 // Stores the final probability result.

	// Initialize the starting state with probability 1.
	dp[0][0] = 1.0

	// Iterate over all possible states for soup A and B.
	for a := range m {
		for b := range m {
			result += forwardUpdate(a, b)
		}
	}

	return result
}
