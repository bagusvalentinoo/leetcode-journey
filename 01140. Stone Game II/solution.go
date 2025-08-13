/**
 * Problem: 1140. Stone Game II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func stoneGameII(piles []int) int {
	// Get the total number of piles
	totalPiles := len(piles)

	// Create a slice to store suffix sums, which helps in quickly calculating the sum of remaining stones
	suffixSums := make([]int, totalPiles+1)

	// Calculate suffix sums from the end of the piles
	for i := totalPiles - 1; i >= 0; i-- {
		suffixSums[i] = suffixSums[i+1] + piles[i]
	}

	// Initialize memoization table to cache results for subproblems
	memo := make([][]int, totalPiles)
	for i := range memo {
		memo[i] = make([]int, totalPiles+1)
	}

	// Define a recursive function to compute the maximum stones Alice can get
	var maxStonesAliceCanGet func(m, currentPile int) int
	maxStonesAliceCanGet = func(m, currentPile int) int {
		// Base case: If all piles are taken, return 0
		if currentPile >= totalPiles {
			return 0
		}
		// If Alice can take all remaining piles, return their sum
		if currentPile+2*m >= totalPiles {
			return suffixSums[currentPile]
		}
		// Return cached result if already computed
		if memo[currentPile][m] != 0 {
			return memo[currentPile][m]
		}

		// Track the maximum stones Alice can get in this turn
		maxStones := 0

		// Try taking x piles where 1 <= x <= 2*m
		for x := 1; x <= 2*m; x++ {
			// Calculate stones Alice can get by taking x piles and subtracting what Bob can get next
			currentStones := suffixSums[currentPile] - maxStonesAliceCanGet(max(m, x), currentPile+x)
			maxStones = max(maxStones, currentStones)
		}

		// Cache the result for current state
		memo[currentPile][m] = maxStones
		
		return maxStones
	}

	// Start the game with M = 1 and at the first pile
	return maxStonesAliceCanGet(1, 0)
}
