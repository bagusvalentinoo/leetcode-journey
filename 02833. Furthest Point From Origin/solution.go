/**
 * Problem: 2833. Furthest Point From Origin
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func furthestDistanceFromOrigin(moves string) int {
	// Counters for left moves, right moves, and blank moves
	leftCount, rightCount, blankCount := 0, 0, 0

	// Iterate through each character in the moves string
	for _, moveChar := range moves {
		// Increment left counter for 'L'
		if moveChar == 'L' {
			leftCount++
		} else if moveChar == 'R' {
			// Increment right counter for 'R'
			rightCount++
		} else {
			// Increment blank counter for '_'
			blankCount++
		}
	}

	// Calculate the net difference between left and right moves
	result := leftCount - rightCount

	// Take absolute value of the difference
	if result < 0 {
		result = -result
	}

	// Add blank moves (they can all go in the direction of the net difference)
	return result + blankCount
}
