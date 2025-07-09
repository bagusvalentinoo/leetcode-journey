/**
 * Problem: 1025. Divisor Game
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func divisorGame(n int) bool {
	// The game is a winning game for Alice if n is even.
	// If n is odd, Alice cannot make a move that leaves an even number for Bob.
	// Therefore, Alice wins if and only if n is even.
	return n%2 == 0
}
