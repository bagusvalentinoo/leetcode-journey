/**
 * Problem: 1052. Grumpy Bookstore Owner
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxSatisfied(customers []int, grumpy []int, minutes int) int {
	// Initialize totalSatisfied to store the number of customers already satisfied (when owner is not grumpy)
	totalSatisfied := 0
	// prefixGrumpySum will store prefix sums of customers who are unsatisfied due to grumpiness
	prefixGrumpySum := make([]int, len(customers)+1)

	// Iterate through each minute
	for i := range customers {
		if grumpy[i] == 0 {
			// Owner is not grumpy, add customers to totalSatisfied
			totalSatisfied += customers[i]
		} else {
			// Owner is grumpy, add customers to prefixGrumpySum for possible satisfaction later
			prefixGrumpySum[i+1] = customers[i]
		}

		// Build prefix sum for grumpy customers
		if i > 0 {
			prefixGrumpySum[i+1] += prefixGrumpySum[i]
		}
	}

	// Initialize maxSatisfied to the base satisfied customers
	maxSatisfied := totalSatisfied

	// Try every possible window of 'minutes' to maximize satisfied customers
	for i := 0; i <= len(customers)-minutes; i++ {
		// Calculate satisfied customers if owner is not grumpy for this window
		maxSatisfied = max(maxSatisfied, totalSatisfied+prefixGrumpySum[i+minutes]-prefixGrumpySum[i])
	}

	// Return the maximum number of satisfied customers
	return maxSatisfied
}
