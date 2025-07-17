/**
 * Problem: 1033. Moving Stones Until Consecutive
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numMovesStones(a int, b int, c int) []int {
	// Use XOR operation to calculate the middle value after sorting
	// This works because a^b^c^a^c = b (XOR properties)
	d := a ^ b ^ c

	// Sort the three positions: a becomes minimum, c becomes maximum
	a, c = min(min(a, b), c), max(max(a, b), c)
	
	// Calculate the middle position using XOR operation
	b = d ^ a ^ c

	// Return array with minimum moves and maximum moves
	return []int{
		minMoves(a, b, c),  // Minimum moves needed
		c - a - 2,          // Maximum moves (total gaps between positions)
	}
}

func minMoves(a, b, c int) int {
	// Case 1: Stones are already consecutive (no gaps)
	if (b-a-1 == 0) && (c-b-1 == 0) {
		return 0
	}
	
	// Case 2: Two stones are already adjacent (one gap is 0)
	if (b-a-1 == 0) || (c-b-1 == 0) {
		return 1
	}
	
	// Case 3: One stone is within 2 positions of another (gap of 1)
	if (b-a-1 == 1) || (c-b-1 == 1) {
		return 1
	}
	
	// Case 4: All other cases require 2 moves
	return 2
}
