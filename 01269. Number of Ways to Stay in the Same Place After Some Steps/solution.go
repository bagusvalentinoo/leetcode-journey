/**
 * Problem: 1269. Number of Ways to Stay in the Same Place After Some Steps
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

func numWays(steps int, arrLen int) int {
	// MOD is the modulo value to prevent integer overflow and match problem constraints.
	const MOD = 1_000_000_007

	// maxReachablePos calculates the furthest position we can reach given the steps.
	maxReachablePos := steps / 2

	// If the array length is smaller than maxReachablePos, adjust maxReachablePos accordingly.
	if arrLen-1 < maxReachablePos {
		maxReachablePos = arrLen - 1
	}

	// dp holds the number of ways to reach each position at the current step.
	dp := make([]int, maxReachablePos+1)
	// At step 0, we are at position 0 with one way.
	dp[0] = 1

	// Iterate through each step from 1 to steps.
	for step := 1; step <= steps; step++ {
		// prevDp stores the previous state of dp for reference.
		prevDp := make([]int, maxReachablePos+1)
		copy(prevDp, dp)

		// limit restricts the positions we can reach at this step.
		limit := step

		// Ensure limit does not exceed maxReachablePos.
		if maxReachablePos < limit {
			limit = maxReachablePos
		}

		// For each position, calculate the number of ways to reach it.
		for pos := 0; pos <= limit; pos++ {
			// Start with the ways from staying at the same position.
			ways := prevDp[pos]

			// Add ways from moving left if possible.
			if pos > 0 {
				ways = (ways + prevDp[pos-1]) % MOD
			}
			// Add ways from moving right if possible.
			if pos < maxReachablePos {
				ways = (ways + prevDp[pos+1]) % MOD
			}

			// Update dp for the current position.
			dp[pos] = ways
		}
	}

	// Return the number of ways to stay at position 0 after all steps.
	return dp[0]
}
