/**
 * Problem: 1222. Queens That Can Attack the King
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// DIRS defines the 8 possible directions a queen can move on a chessboard.
var DIRS = [][]int{
	{-1, -1}, // up-left
	{-1, 0},  // up
	{-1, 1},  // up-right
	{0, 1},   // right
	{1, 1},   // down-right
	{1, 0},   // down
	{1, -1},  // down-left
	{0, -1},  // left
}

// queensAttacktheKing returns all queens that can attack the king.
func queensAttacktheKing(queens [][]int, king []int) [][]int {
	result := [][]int{} // Stores positions of attacking queens

	// Iterate over all 8 directions
	for _, direction := range DIRS {
		current := make([]int, 2) // Current position in the direction

		// Copy king's position to current
		copy(current, king)

		found := false // Flag to indicate if a queen is found in this direction

		// Traverse in the current direction until out of bounds
		for current[0] >= 0 && current[0] < 8 && current[1] >= 0 && current[1] < 8 {
			// Check if any queen is at the current position
			for _, queen := range queens {
				// If queen is found at current position
				if slices.Equal(queen, current) {
					result = append(result, queen) // Add queen to result
					found = true // Mark as found
					break
				}
			}

			// If a queen is found, stop searching in this direction
			if found {
				break
			}

			// Move to the next position in the current direction
			current[0] += direction[0]
			current[1] += direction[1]
		}
	}

	// Return all attacking queens
	return result
}
