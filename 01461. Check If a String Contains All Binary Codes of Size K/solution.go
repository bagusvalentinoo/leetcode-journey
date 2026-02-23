/**
 * Problem: 1461. Check If a String Contains All Binary Codes of Size K
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func hasAllCodes(s string, k int) bool {
	// Total number of possible k-bit combinations (2^k)
	totalCombinations := 1 << k

	// Bitmask to keep only the last k bits
	bitmask := totalCombinations - 1

	// Length of input string
	stringLength := len(s)

	// If we can't fit all combinations, early exit
	if stringLength-k+1 < totalCombinations {
		return false
	}

	// Boolean array to track which combinations we've seen
	seenCombinations := make([]bool, totalCombinations)

	// Counter for remaining combinations to find
	remaining := totalCombinations

	// Current rolling hash value
	currentHash := 0

	// Build initial hash for first k characters
	for i := 0; i < k; i++ {
		currentHash = (currentHash << 1) | int(s[i]-'0')
	}

	// Mark first combination as seen
	seenCombinations[currentHash] = true
	remaining--

	// Slide through the rest of the string
	for i := k; i < stringLength; i++ {
		// Update rolling hash: shift left, mask, add current bit
		currentHash = ((currentHash << 1) | int(s[i]-'0')) & bitmask

		// If this is a new combination
		if !seenCombinations[currentHash] {
			remaining--
		}

		// Mark combination as seen
		seenCombinations[currentHash] = true

		// Early exit if we've found all combinations
		if remaining == 0 {
			return true
		}
	}

	// Return true if we found all combinations
	return remaining == 0
}
