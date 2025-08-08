/**
 * Problem: 1124. Longest Well-Performing Interval
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func longestWPI(hours []int) int {
	// Get the length of the input hours array
	n := len(hours)
	// Initialize prefix sum array to store the count of tiring days up to each index
	prefix := make([]int, n+1)

	// Build the prefix sum array: increment if hours[i] > 8 (tiring day)
	for i := 0; i < n; i++ {
		prefix[i+1] = prefix[i]
		if hours[i] > 8 {
			prefix[i+1]++
		}
	}

	// If the total number of tiring days is more than half, the whole interval is well-performing
	if 2*prefix[n] > n {
		return n
	}
	// If there are no tiring days, return 0 as no well-performing interval exists
	if prefix[n] == 0 {
		return 0
	}

	// Initialize the answer to store the maximum length found
	ans := 0

	// Try all possible intervals [i, j) and check if they are well-performing
	for i := 0; i < n; i++ {
		for j := n; j >= i+1+ans; j-- {
			// Check if the interval [i, j) has more tiring days than non-tiring days
			if 2*(prefix[j]-prefix[i]) > (j - i) {
				ans = max(ans, j-i)
				break // No need to check shorter intervals starting at i
			} else {
				// Skip intervals that cannot be well-performing
				j -= max(0, (j-i)-2*(prefix[j]-prefix[i]))
			}
		}
	}

	// Return the maximum length of well-performing interval found
	return ans
}
