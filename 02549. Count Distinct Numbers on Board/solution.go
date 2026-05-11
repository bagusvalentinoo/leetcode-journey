/**
 * Problem: 2549. Count Distinct Numbers on Board
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func distinctIntegers(n int) int {
	// Initialize counter for distinct integers
	reachableCount := 0

	// Continue while we can subtract 1
	for n >= 2 {
		// Count this integer
		reachableCount++
		// Subtract 1 to get next integer
		n = n - 1
	}

	// Return count if any reached, otherwise return 1 (for n = 1)
	if reachableCount != 0 {
		return reachableCount
	}
	return 1
}
