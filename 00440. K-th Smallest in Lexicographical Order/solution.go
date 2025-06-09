/**
 * Problem: 440. K-th Smallest in Lexicographical Order
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findKthNumber(n int, k int) int {
	// Start with the smallest lexicographical number
	current := 1
	// Decrement k because we already have our 1st number
	k--

	for k > 0 {
		// Count how many numbers are in the current prefix's subtree
		count := 0
		// Define the range for the current prefix
		start, end := current, current+1

		// Calculate total numbers in this prefix's subtree
		for start <= n {
			count += min(n+1, end) - start
			start *= 10
			end *= 10
		}

		// If k is beyond this subtree, move to next prefix
		if k >= count {
			current++
			k -= count
		} else {
			// Move down to the first child in this subtree
			current *= 10
			k--
		}
	}

	return current
}
