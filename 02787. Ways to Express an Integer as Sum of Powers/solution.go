/**
 * Problem: 2787. Ways to Express an Integer as Sum of Powers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

func numberOfWays(n int, x int) int {
	// Define the modulo constant as per problem constraints
	MOD := 1000000007

	// Initialize a DP array where dp[i] represents the number of ways to sum to i
	dp := make([]int, n + 1)

	// Base case: There is one way to sum to 0 (by choosing nothing)
	dp[0] = 1

	// Iterate over all possible base numbers whose power x does not exceed n
	for base := 1; math.Pow(float64(base), float64(x)) <= float64(n); base++ {
		// Calculate the current power value
		powerValue := int(math.Pow(float64(base), float64(x)))

		// Update the DP array from high to low to avoid recomputation
		for sum := n - powerValue; sum >= 0; sum-- {
			// Add the number of ways to form 'sum' to 'sum + powerValue'
			dp[sum + powerValue] += dp[sum]

			// Apply modulo to keep the result within bounds
			if dp[sum + powerValue] > MOD {
				dp[sum + powerValue] -= MOD
			}
		}
	}

	// Return the number of ways to sum to n
	return dp[n]
}
