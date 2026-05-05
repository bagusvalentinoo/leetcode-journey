/**
 * Problem: 3502. Minimum Cost to Reach Every Position
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minCosts(cost []int) []int {
	// Initialize result slice with same length as input
	minimumCosts := make([]int, len(cost))

	// Fill result slice with running minimum
	for i := 0; i < len(minimumCosts); i++ {
		// Check if this is not the first element
		if i > 0 {
			// Compare current cost with previous minimum
			if cost[i] < minimumCosts[i-1] {
				// Current cost is smaller, use it
				minimumCosts[i] = cost[i]
			} else {
				// Previous minimum is smaller, keep it
				minimumCosts[i] = minimumCosts[i-1]
			}
		} else {
			// First element: minimum is the element itself
			minimumCosts[i] = cost[i]
		}
	}

	// Return the array of running minimums
	return minimumCosts
}
