/**
 * Problem: 3258. Count Substrings That Satisfy K-Constraint I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countKConstraintSubstrings(s string, k int) int {
	// Initialize sliding window pointers and counters
	windowStart, zeroCount, oneCount := 0, 0, 0

	// Counter for valid substrings
	totalValidSubstrings := 0

	// Length of the input string
	stringLength := len(s)

	// Expand window by moving right pointer
	for windowEnd := 0; windowEnd < stringLength; windowEnd++ {
		// If current character is '0', increment zero count
		if s[windowEnd] == '0' {
			zeroCount++
		} else {
			// Otherwise, current character is '1', increment one count
			oneCount++
		}

		// Shrink window from left while both counts exceed k
		for zeroCount > k && oneCount > k {
			// If the character at left pointer is '0', decrement zero count
			if s[windowStart] == '0' {
				zeroCount--
			} else {
				// Otherwise, it must be '1', so decrement one count
				oneCount--
			}

			// Move left pointer forward
			windowStart++
		}

		// Add number of valid substrings ending at current right pointer
		totalValidSubstrings += windowEnd - windowStart + 1
	}

	// Return the total count of valid substrings
	return totalValidSubstrings
}
