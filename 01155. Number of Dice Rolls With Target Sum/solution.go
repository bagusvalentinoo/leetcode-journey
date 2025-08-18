/**
 * Problem: 1155. Number of Dice Rolls With Target Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numRollsToTarget(dice int, faces int, target int) int {
	// Define the modulo constant for large results
	const mod = int(1e9 + 7)

	// Initialize DP arrays: current and previous states
	next, prev := make([]int, target+1), make([]int, target+1)

	// Base case: one dice, ways to reach each sum from 1 to faces
	for faceValue := 1; faceValue <= faces && faceValue <= target; faceValue++ {
		prev[faceValue] = 1
	}

	// Iterate over the number of dice (excluding the first, already handled)
	for diceCount := 1; diceCount < dice; diceCount++ {
		// For each possible sum with previous dice
		for sum, ways := range prev {
			if ways == 0 {
				continue // Skip unreachable sums
			}

			// Try all face values for the current dice
			for faceValue := 1; faceValue <= faces; faceValue++ {
				if sum+faceValue > target {
					break // No need to proceed if sum exceeds target
				}

				// Update ways to reach new sum with current dice
				next[sum+faceValue] = (next[sum+faceValue] + ways) % mod
			}
		}

		// Swap DP arrays for next iteration
		next, prev = prev, next
		// Reset next array for reuse
		clear(next)
	}

	// Return the number of ways to reach the target sum with all dice
	return prev[target]
}
