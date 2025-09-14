/**
 * Problem: 1223. Dice Roll Simulation
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 56 ms (Beats 100%)
 */

func dieSimulator(n int, rollMax []int) int {
	// Initialize a 2D slice to store DP states.
	// dp[i][j] represents the number of ways to roll i dice ending with face j (0-5), dp[i][6] is the total for i dice.
	dp := make([][]int, n+1)

	// Allocate space for each row in dp.
	for i := 0; i <= n; i++ {
		dp[i] = make([]int, 7)
	}

	// Base case: 0 dice rolled, only one way (empty sequence).
	dp[0][6] = 1

	// Iterate over the number of dice rolled.
	for i := 1; i <= n; i++ {
		// Iterate over each face of the dice.
		for face := 0; face < 6; face++ {
			// Try all possible counts for the current face, up to rollMax[face].
			for count := 1; count <= rollMax[face]; count++ {
				// If only one die, there's only one way to roll each face.
				if i == 1 {
					dp[i][face] = 1
					break
				}
				// If not enough dice left to roll 'count' times, break.
				if i-count < 0 {
					break
				}

				// Add ways to roll i-count dice, ending with any face except current.
				dp[i][face] = (dp[i][face] + dp[i-count][6] - dp[i-count][face])
				// Ensure non-negative modulo result.
				dp[i][face] = (dp[i][face] + 1000000007) % 1000000007
			}
		}

		// Sum up all ways for i dice, regardless of ending face.
		for face := 0; face < 6; face++ {
			dp[i][6] = (dp[i][6] + dp[i][face] + 1000000007) % 1000000007
		}
	}

	// Return total number of valid sequences for n dice.
	return dp[n][6]
}
