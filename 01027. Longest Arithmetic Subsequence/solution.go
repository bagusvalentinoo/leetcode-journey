/**
 * Problem: 1027. Longest Arithmetic Subsequence
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 62 ms (Beats 100%)
 */

func longestArithSeqLength(nums []int) int {
	// Create a 2D DP table where dp[i][diff+500] represents the length of arithmetic subsequence
	// ending at index i with difference 'diff'. We add 500 to handle negative differences.
	dp := make([][1001]int, 1000)
	
	// Initialize result variable to track the maximum length found so far
	maxLength := 0

	// Iterate backwards through the array to fill the DP table
	for i := len(nums) - 2; i >= 0; i-- {
		// For each position i, check all positions j after it
		for j := i + 1; j < len(nums); j++ {
			// Calculate the arithmetic difference between nums[j] and nums[i]
			diff := nums[j] - nums[i]
			
			// Update DP table: extend the subsequence ending at j with difference 'diff'
			// by including the current element at position i
			dp[i][diff+500] = max(dp[i][diff+500], dp[j][diff+500]+1)

			// Update the maximum length if we found a longer subsequence
			if dp[i][diff+500] > maxLength {
				maxLength = dp[i][diff+500]
			}
		}
	}

	// Return the final result, adding 1 because DP stores length-1 (number of pairs)
	return maxLength + 1
}
