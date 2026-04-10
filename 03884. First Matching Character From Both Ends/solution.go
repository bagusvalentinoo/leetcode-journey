/**
 * Problem: 3884. First Matching Character From Both Ends
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func firstMatchingIndex(s string) int {
	// Get string length
	length := len(s)

	// Iterate through each character from start to middle
	for i := 0; i < length; i++ {
		// Get character at current position and its mirror position
		leftChar, rightChar := s[i], s[length-i-1]

		// If characters match, return current index
		if leftChar == rightChar {
			return i
		}
	}

	// No matching pair found
	return -1
}
