/**
 * Problem: 657. Robot Return to Origin
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func judgeCircle(moves string) bool {
	// Initialize vertical (x) and horizontal (y) coordinates
	x, y := 0, 0

	// Loop through each character in the moves string
	for i := 0; i < len(moves); i++ {
		move := moves[i]

		// If move is 'U', move up (increase x coordinate)
		if move == 'U' {
			x++
		} else if move == 'D' {
			// If move is 'D', move down (decrease x coordinate)
			x--
		} else if move == 'R' {
			// If move is 'R', move right (increase y coordinate)
			y++
		} else if move == 'L' {
			// If move is 'L', move left (decrease y coordinate)
			y--
		}
	}

	// If both coordinates are zero, robot returned to origin
	if x == 0 && y == 0 {
		return true
	}

	// Otherwise, robot did not return to origin
	return false
}
