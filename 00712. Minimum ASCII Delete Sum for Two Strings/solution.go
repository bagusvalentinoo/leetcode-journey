/**
 * Problem: 712. Minimum ASCII Delete Sum for Two Strings
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumDeleteSum(s1 string, s2 string) int {
	// Ensure s1 is the longer string for space optimization
	sLen := len(s2)
	if len(s1) < sLen {
		s1, s2 = s2, s1
		sLen = len(s2)
	}

	// dpPrev and dpCur for space-optimized DP (only need previous row)
	dpPrev := make([]int, sLen+1)
	dpCur := make([]int, sLen+1)

	// Initialize dpPrev with cumulative ASCII sum for s2
	for i := 1; i <= sLen; i++ {
		dpPrev[i] = dpPrev[i-1] + int(s2[i-1])
	}

	// Process each character of s1
	for i := range s1 {
		// Update dpCur[0] with cumulative ASCII sum for s1
		dpCur[0] = dpPrev[0] + int(s1[i])

		// Process each character of s2
		for j := 1; j <= sLen; j++ {
			// If characters match, no deletion needed for this pair
			if s1[i] == s2[j-1] {
				dpCur[j] = dpPrev[j-1]
			} else {
				// Characters don't match: choose minimum of two deletion options
				dpCur[j] = min(
					dpPrev[j]+int(s1[i]),    // Delete character from s1
					dpCur[j-1]+int(s2[j-1]), // Delete character from s2
				)
			}
		}

		// Swap dp arrays for next iteration
		dpPrev, dpCur = dpCur, dpPrev
	}

	// Return minimum deletion sum (stored in dpPrev[sLen])
	return dpPrev[sLen]
}
