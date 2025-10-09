/**
 * Problem: 3494. Find the Minimum Amount of Time to Brew Potions
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 98 ms (Beats 100%)
 */

func minTime(skill []int, mana []int) int64 {
	// Initialize a dynamic programming slice to store intermediate results.
	dp := make([]int, len(skill)+1)

	// Iterate over each mana value.
	for i := 0 ; i < len(mana) ;i++ {
		// Update dp for each skill using the current mana.
		for j := 0; j < len(skill) ;j++ {
			// Calculate the maximum time by considering brewing with or without current skill.
			dp[j+1] = max(dp[j],dp[j+1])+ mana[i]*skill[j]
		}

		// Adjust dp values in reverse to maintain correct state for next iteration.
		for j := len(skill) - 1 ; j >= 0 ; j-- {	
			// Remove the effect of current mana and skill from dp.
			dp[j] = dp[j+1] - mana[i]*skill[j]
		}
	}
	
	// Return the minimum time required to brew all potions as int64.
	return int64(dp[len(dp)-1])
}
