/**
 * Problem: 342. Power of Four
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isPowerOfFour(n int) bool {
	return n > 0 && (n & (n - 1)) == 0 && (n-1)%3 == 0
}
