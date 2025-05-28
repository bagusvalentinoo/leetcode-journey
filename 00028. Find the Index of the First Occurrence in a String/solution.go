/**
 * Problem: 28. Find the Index of the First Occurrence in a String
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func strStr(haystack string, needle string) int {
	// Return 0 if needle is empty
	if len(needle) == 0 {
		return 0
	}

	// Iterate through haystack to find needle
	for i := 0; i <= len(haystack) - len(needle); i++ {
		// Check if substring matches needle
		if haystack[i : i + len(needle)] == needle {
			return i
		}
	}

	// Return -1 if needle not found
	return -1
}