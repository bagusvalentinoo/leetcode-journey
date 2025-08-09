/**
 * Problem: 231. Power of Two
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// isPowerOfTwo checks whether the given integer n is a power of two.
// It returns true if n is a power of two, otherwise false.
func isPowerOfTwo(n int) bool {
	// Check if n is greater than 0 to exclude non-positive numbers.
	// Then use bitwise AND between n and (n - 1).
	// For powers of two, this operation results in 0.
	// Example: 8 (1000) & 7 (0111) = 0
	return n > 0 && (n & (n - 1)) == 0
}
