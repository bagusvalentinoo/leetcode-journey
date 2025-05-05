/**
 * Problem: 3. Longest Substring Without Repeating Characters
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func lengthOfLongestSubstring(s string) int {
	// Map to store the most recent index of each character
	lastIndex := make(map[byte]int)
	// Keep track of maximum substring length found
	maxLength := 0
	// Left boundary of current substring without repeating chars
	i := 0

	for j := 0; j < len(s); j++ {
			// If character exists in current window, move left boundary past it
			if idx, exists := lastIndex[s[j]]; exists && idx >= i {
					i = idx + 1
			}

			// Update latest position of current character
			lastIndex[s[j]] = j

			// Calculate and update maximum substring length
			if currentLength := j - i + 1; currentLength > maxLength {
					maxLength = currentLength
			}
	}

	return maxLength
}