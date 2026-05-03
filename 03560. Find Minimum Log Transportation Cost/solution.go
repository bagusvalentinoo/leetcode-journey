/**
 * Problem: 3560. Find Minimum Log Transportation Cost
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minCuttingCost(n int, m int, k int) int64 {
	// Find the longest log
	longest := int64(n)

	// Check if m is the longest log
	if m > n {
		longest = int64(m)
	}

	// Return 0 if the longest log fits in a truck
	if longest <= int64(k) {
		return 0
	}

	// Calculate the cost to cut the longest log into pieces that fit
	return int64(k) * (longest - int64(k))
}
