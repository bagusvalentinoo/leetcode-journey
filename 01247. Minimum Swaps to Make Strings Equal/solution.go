/**
 * Problem: 1247. Minimum Swaps to Make Strings Equal
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumSwap(s1 string, s2 string) int {
	// Initialize counters for mismatched 'x' and 'y' characters
	xMismatchCount, yMismatchCount := 0, 0

	// Iterate through each character in s1
	for i, ch := range s1 {
		// Check if current character is 'x'
		if ch == 'x' {
			// Increment xMismatchCount if characters at position i differ
			if s1[i] != s2[i] {
				xMismatchCount++
			}
		} else {
			// Increment yMismatchCount if characters at position i differ
			if s1[i] != s2[i] {
				yMismatchCount++
			}
		}
	}

	// If both mismatch counts are even, swaps can resolve all mismatches
	if (xMismatchCount%2 == 0) && (yMismatchCount%2 == 0) {
		return (xMismatchCount + yMismatchCount) / 2
	// If both mismatch counts are odd, one extra swap is needed
	} else if (xMismatchCount%2 == 1) && (yMismatchCount%2 == 1) {
		return (xMismatchCount + yMismatchCount) / 2 + 1
	}

	// If mismatches cannot be resolved, return -1
	return -1
}
