/**
 * Problem: 3085. Minimum Deletions to Make String K-Special
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumDeletions(word string, k int) int {
	// Count frequency of each character (a-z)
	charFreq := make([]int, 26)
	// Track cumulative deletions as we iterate
	cumulativeDeletions := 0
	// Initialize answer with worst case (delete all characters)
	minDeletions := len(word)

	// Count frequency of each character
	for _, ch := range word {
		charFreq[ch-'a']++
	}

	// Sort frequencies to process from lowest to highest
	sort.Ints(charFreq)

	// Try each frequency as the minimum frequency
	for i := 0; i < len(charFreq); i++ {
		// Start with current cumulative deletions
		currentDeletions := cumulativeDeletions
		// Set current frequency as minimum
		minFreq := charFreq[i]

		// Process frequencies from highest to lowest
		for j := len(charFreq) - 1; j > i; j-- {
			// If frequency difference is within k, no more deletions needed
			if charFreq[j]-minFreq <= k {
				break
			}

			// Delete excess characters beyond k difference
			currentDeletions += charFreq[j] - minFreq - k
		}
		
		// Update minimum deletions found so far
		minDeletions = min(minDeletions, currentDeletions)
		// Add current frequency to cumulative deletions for next iteration
		cumulativeDeletions += charFreq[i]
	}

	return minDeletions
}
