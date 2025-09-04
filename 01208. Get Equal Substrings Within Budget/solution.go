/**
 * Problem: 1208. Get Equal Substrings Within Budget
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func equalSubstring(s string, t string, maxCost int) int {
	// Get the length of the input strings
	n := len(s)
	// Initialize the left and right pointers for the sliding window
	left, right := 0, 0
	// totalCost keeps track of the current cost of converting substring s[left:right] to t[left:right]
	totalCost := 0
	// maxLen stores the maximum length of valid substring found so far
	maxLen := 0

	// Iterate through the string using the right pointer
	for right < n {
		// Add the cost of converting the current character from s to t
		totalCost += abs(int(s[right]) - int(t[right]))

		// If the totalCost exceeds maxCost, shrink the window from the left
		for totalCost > maxCost {
			// Subtract the cost of the character at the left pointer
			totalCost -= abs(int(s[left]) - int(t[left]))
			// Move the left pointer to the right
			left += 1
		}

		// Update maxLen if the current window is larger
		maxLen = max(maxLen, right - left + 1)
		// Move the right pointer to the next character
		right += 1
	}

	// Return the maximum length of valid substring found
	return maxLen
}

func abs(x int) int {
	// Check if x is negative
	if x < 0 {
		// If negative, return its positive equivalent
		return -x
	}

	// If not negative, return x as is
	return x
}
