/**
 * Problem: 3202. Find the Maximum Length of Valid Subsequence II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 83 ms (Beats 100%)
 */

func maximumLength(nums []int, k int) int {
	// Create a 2D DP table where dp[i][j] represents the maximum length
	// of valid subsequence ending with remainder i and having second-to-last element with remainder j
	dp := make([][]int, k)

	// Initialize each row of the DP table
	for i := range dp {
		dp[i] = make([]int, k)
	}

	// Track the maximum length found so far
	maxLength := 0

	// Process each number in the input array
	for _, num := range nums {
		// Get the remainder when divided by k
		remainder := num % k

		// Try all possible previous remainders
		for prevRemainder := range k {
			// Calculate what the current remainder should be to form a valid pair
			// with the previous remainder: (prevRemainder + currentRemainder) % k should be constant
			expectedPrevRemainder := (prevRemainder + k - remainder) % k
			
			// Calculate new length by extending the subsequence ending with expectedPrevRemainder
			newLength := dp[expectedPrevRemainder][prevRemainder] + 1
			
			// Update DP table if we found a better solution
			if dp[remainder][prevRemainder] < newLength {
				dp[remainder][prevRemainder] = newLength

				// Update global maximum if necessary
				if maxLength < newLength {
					maxLength = newLength
				}
			}
		}
	}

	// Return the maximum length found
	return maxLength
}
