/**
 * Problem: 1492. The kth Factor of n
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kthFactor(n int, k int) int {
	// Counter for factors found
	factorCount := 0

	// Iterate through all possible factors from 1 to n
	for i := 1; i <= n; i++ {
		// Check if i is a factor of n
		if n%i == 0 {
			// Increment factor counter
			factorCount++

			// If we've found the k-th factor, return it
			if factorCount == k {
				return i
			}
		}
	}

	// Return -1 if k exceeds the total number of factors
	return -1
}
