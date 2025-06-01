/**
 * Problem: 2929. Distribute Candies Among Children II
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func distributeCandies(n int, limit int) int64 {
	// Helper function to calculate combinations C(k,2)
	combinations := func(k int) int64 {
		if k < 0 { return 0 }
		
		return int64(k) * int64(k - 1) / 2
	}

	// Start with total possible distributions without limits
	count := combinations(n + 2)
	// Subtract distributions where one child exceeds limit
	count -= 3 * combinations(n - (limit + 1) + 2)
	// Add back distributions where two children exceed limit (to avoid double-counting)
	count += 3 * combinations(n - 2*(limit + 1) + 2)
	// Subtract distributions where all three children exceed limit
	count -= combinations(n - 3*(limit + 1) + 2)

	return count
}
