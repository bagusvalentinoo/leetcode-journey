/**
 * Problem: 2900. Longest Unequal Adjacent Groups Subsequence I
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getLongestSubsequence(words []string, groups []int) []string {
	// Initialize with the first word's index
	c := []int{0}

	// Build indices of words with alternating groups
	for i := 0; i < len(words); i++ {
		if groups[i] != groups[c[len(c)-1]] {
			c = append(c, i)
		}
	}

	// Construct result array using selected indices
	result := []string{}

	// Add words at selected indices to result
	for _, index := range c {
		result = append(result, words[index])
	}

	return result
}