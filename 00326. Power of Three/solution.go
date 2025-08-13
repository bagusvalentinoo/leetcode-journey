/**
 * Problem: 326. Power of Three
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isPowerOfThree(n int) bool {
	return n > 0 && 1162261467%n == 0
}
