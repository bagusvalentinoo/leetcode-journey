/**
 * Problem: 2311. Longest Binary Subsequence Less Than or Equal to K
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestSubsequence(s string, k int) int {
	// Get the length of the binary string
	n := len(s)
	// Initialize count for valid subsequence length and power for bit position
	count, power := 0, 0
	// Track the decimal value of current subsequence
	val := int64(0)

	// Iterate from right to left (least significant bit first)
	for i := n - 1; i >= 0; i-- {
		// Always include '0' bits as they don't increase the value
		if s[i] == '0' {
			count++
		} else {
			// For '1' bits, check if adding them keeps value <= k
			if power < 32 {
				val += 1 << power

				// Include this '1' bit only if total value remains <= k
				if val <= int64(k) {
					count++
				}
			}
		}

		// Move to next bit position
		power++
	}
	
	return count
}
