/**
 * Problem: 1048. Longest String Chain
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

func longestStrChain(words []string) int {
	// Sort the words by their lengths in ascending order.
	sort.Slice(words, func(i, j int) bool {
		return len(words[i]) < len(words[j])
	})

	wordCount := len(words) // Store the number of words.

	maxChainLength := 1 // Initialize the result to at least 1 (every word is a chain of length 1).
	dp := make([]int, wordCount) // dp[i] stores the longest chain ending at words[i].
	dp[0] = 1 // The first word forms a chain of length 1.

	// Iterate through each word starting from the second word.
	for i := 1; i < wordCount; i++ {
		currentMax := 0 // Store the maximum chain length for words[i].

		// Check all previous words to see if they are predecessors.
		for j := 0; j < i; j++ {
			if isPredecessor(words[j], words[i]) {
				currentMax = max(currentMax, dp[j])
			}
		}

		dp[i] = 1 + currentMax // The chain length for words[i] is 1 + max predecessor chain.
		maxChainLength = max(maxChainLength, dp[i]) // Update the result if needed.
	}

	return maxChainLength // Return the length of the longest chain found.
}

// isPredecessor checks if word1 is a predecessor of word2 (i.e., word2 can be formed by inserting one letter into word1).
func isPredecessor(word1, word2 string) bool {
	len1, len2 := len(word1), len(word2)

	// A valid predecessor must be exactly one character shorter.
	if len2 != len1+1 {
		return false
	}

	diffCount := 0 // Count the number of differences (insertions).
	idx2 := 0      // Pointer for word2.

	// Iterate through each character of word1.
	for idx1 := 0; idx1 < len1; idx1++ {
		if word1[idx1] == word2[idx2] {
			idx2++ // Characters match, move both pointers.
			continue
		}

		diffCount++ // Found a difference (potential insertion).
		idx2++      // Move pointer for word2 to skip the extra character.
		
		// If more than one insertion or the next characters don't match, return false.
		if diffCount > 1 || word1[idx1] != word2[idx2] {
			return false
		}

		idx2++ // Move pointer for word2 again after skipping.
	}

	return true // Return true if only one insertion was found.
}
