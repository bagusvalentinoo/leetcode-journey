/**
 * Problem: 2901. Longest Unequal Adjacent Groups Subsequence II
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

func getWordsInLongestSubsequence(words []string, groups []int) []string {
	// Initialize arrays for dynamic programming and tracking paths
	n := len(groups)
	dp := make([]int, n)
	prev := make([]int, n)

	// Set default values: each element starts as its own subsequence
	for i := range dp {
		dp[i] = 1
		prev[i] = -1
	}

	// Track the index with the longest subsequence
	maxIndex := 0

	// Build the DP table by checking all previous elements
	for i := 1; i < n; i++ {
		for j := 0; j < i; j++ {
			// Add to subsequence if words differ by exactly one character, current dp is better, and groups differ
			if check(words[i], words[j]) && dp[j]+1 > dp[i] && groups[i] != groups[j] {
				dp[i] = dp[j] + 1
				prev[i] = j
			}
		}

		// Update the index with the maximum length subsequence
		if dp[i] > dp[maxIndex] {
			maxIndex = i
		}
	}

	// Construct the result by backtracking through the prev array
	ans := []string{}

	// Build the answer in reverse order by following prev pointers
	for i := maxIndex; i >= 0; i = prev[i] {
		ans = append(ans, words[i])
	}

	// Correct the order of the result
	reverse(ans)

	return ans
}

func check(s1, s2 string) bool {
	// Check if two strings differ by exactly one character and have the same length
	if len(s1) != len(s2) {
		return false
	}

	// Count character differences between strings
	diff := 0

	for i := 0; i < len(s1); i++ {
		// Increment diff when characters at same position don't match
		if s1[i] != s2[i] {
			diff++

			// Early return if more than one difference found
			if diff > 1 {
				return false
			}
		}
	}

	// Valid only if exactly one character differs
	return diff == 1
}

func reverse(arr []string) {
	// Swap elements from both ends of array until reaching the middle
	for i, j := 0, len(arr) - 1; i < j; i, j = i + 1, j - 1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
}