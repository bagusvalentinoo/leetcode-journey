/**
 * Problem: 1217. Minimum Cost to Move Chips to The Same Position
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minCostToMoveChips(position []int) int {
	// Initialize counters for chips at odd and even positions
	odd, even := 0, 0

	// Iterate through each chip's position
	for _, currentPosition := range position {
		// If the position is even, increment the even counter
		if currentPosition%2 == 0 {
			odd++
		} else {
			// If the position is odd, increment the odd counter
			even++
		}
	}
	
	// Return the minimum cost to move all chips to the same position
	// The cost is the minimum of chips at odd or even positions
	if even < odd {
		return even
	}

	return odd
}
