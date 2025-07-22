/**
 * Problem: 1049. Last Stone Weight II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func lastStoneWeightII(stones []int) int {
	// Calculate the total sum of all stones
	totalSum := 0
	for _, stone := range stones {
		totalSum += stone
	}

	// The target is to get as close as possible to half of the total sum
	halfSum := totalSum / 2

	// dp[j] will store the maximum sum we can get that does not exceed j
	dp := make([]int, halfSum+1)

	// Initialize dp array for the first stone
	for j := 1; j <= halfSum; j++ {
		if stones[0] <= j {
			dp[j] = stones[0]
		}
	}

	// Fill the dp array for the rest of the stones
	for i := 1; i < len(stones); i++ {
		for j := halfSum; j >= stones[i]; j-- {
			// Choose the maximum between not taking or taking the current stone
			dp[j] = max(dp[j], dp[j-stones[i]]+stones[i])
		}
	}

	// The other set's sum is the remaining stones
	otherSetSum := totalSum - dp[halfSum]

	// Return the minimal possible difference between the two sets
	if otherSetSum > dp[halfSum] {
		return otherSetSum - dp[halfSum]
	}

	// Return the difference between the two sets
	return dp[halfSum] - otherSetSum
}
