/**
 * Problem: 3021. Alice and Bob Playing Flower Game
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func flowerGame(n int, m int) int64 {
	// Convert n and m to int64 for safe multiplication and division
	// The result is the total number of valid pairs divided by 2
	return int64(n) * int64(m) / 2
}
