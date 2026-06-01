/**
 * Problem: 2144. Minimum Cost of Buying Candies With Discount
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumCost(cost []int) int {
	// Sort costs in descending order (highest to lowest)
	sort.Sort(sort.Reverse(sort.IntSlice(cost)))

	// Initialize total sum accumulator
	totalSum := 0

	// Iterate through array in steps of 3 (take 2, skip 1)
	for i := 0; i < len(cost); i += 3 {
		// Add the first item of each group (most expensive in that group)
		totalSum += cost[i]

		// If there is a second item in the group, add it to the total sum
		if i+1 < len(cost) {
			totalSum += cost[i+1]
		}
	}

	// Return the calculated total cost
	return totalSum
}
