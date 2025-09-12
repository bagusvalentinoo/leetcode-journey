/**
 * Problem: 1221. Split a String in Balanced Strings
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func balancedStringSplit(s string) int {
	// Initialize counters for 'L' and 'R' characters
	// Initialize the result to store the number of balanced substrings
	// Initialize index for iterating through the string
	lCount, rCount, balancedCount, index := 0, 0, 0, 0

	// Iterate through each character in the string
	for index < len(s) {

		// If the current character is 'L', increment lCount
		if s[index] == 'L' {
			lCount += 1
			index += 1
		// If the current character is 'R', increment rCount
		} else if s[index] == 'R' {
			rCount += 1
			index += 1
		}

		// If the counts of 'L' and 'R' are equal, a balanced substring is found
		if lCount == rCount {
			balancedCount += 1
		}
	}

	// Return the total number of balanced substrings
	return balancedCount
}
