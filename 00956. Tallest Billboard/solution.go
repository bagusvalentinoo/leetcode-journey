/**
 * Problem: 956. Tallest Billboard
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

func tallestBillboard(rods []int) int {
	// Calculate total sum of all rods
	sum := 0
	for _, v := range rods {
		sum += v
	}

	// dp[i] represents the max height of one support when difference between supports is i
	// dp[i] = -1 means the state is unreachable
	dp, curr := make([]int, sum+1), make([]int, sum+1)
	for i, _ := range dp {
		dp[i] = -1
	}

	// Helper functions for absolute value and min/max operations
	abs := func(x int) int { if x < 0 { return -x }; return x }
	min := func(x, y int) int { if x < y { return x }; return y }
	max := func(x, y int) int { if x > y { return x }; return y }

	// Base case: zero difference is achievable with zero height
	dp[0] = 0

	// Process each rod
	for _, v := range rods {
		// Store current dp state before processing this rod
		copy(curr, dp)

		for i := 0; i <= sum-v; i++ {
			// Skip unreachable states
			if curr[i] < 0 { continue }

			// Add rod to taller support (increases difference by v)
			dp[i+v] = max(dp[i+v], curr[i])
			
			// Add rod to shorter support (decreases difference or flips sides)
			dp[abs(i-v)] = max(dp[abs(i-v)], curr[i]+min(v, i))
		}
	}

	// dp[0] represents max height when both supports are equal
	return dp[0]
}