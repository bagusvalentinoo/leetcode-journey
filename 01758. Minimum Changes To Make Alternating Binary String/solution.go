/**
 * Problem: 1758. Minimum Changes To Make Alternating Binary String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minOperations(s string) int {
	// Count differences when starting with '0' at even positions
	differences := 0
	// Get string length
	length := len(s)

	// Check each character position
	for i := 0; i < length; i++ {
		// Expected value based on position parity
		expected := 0

		// Odd positions should be '1', even positions should be '0'
		if i%2 == 1 {
			expected = 1
		}
		// Compare actual character with expected
		if int(s[i]-'0') != expected {
			differences++
		}
	}

	// Minimum between starting with '0' at even vs '1' at even
	if differences < length-differences {
		return differences
	}

	// Return the smaller count
	return length - differences
}
