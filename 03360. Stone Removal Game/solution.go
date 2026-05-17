/**
 * Problem: 3360. Stone Removal Game
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canAliceWin(n int) bool {
	// Counter for number of moves made
	moveCount := 0
	// Starting pile size to remove
	currentPile := 10

	// Continue while enough stones remain to remove current pile
	for n >= currentPile {
		// Remove current pile from total stones
		n -= currentPile
		// Decrease pile size for next move
		currentPile--
		// Increment move counter
		moveCount++
	}

	// Alice wins if number of moves is odd (Alice starts first)
	return moveCount%2 != 0
}
