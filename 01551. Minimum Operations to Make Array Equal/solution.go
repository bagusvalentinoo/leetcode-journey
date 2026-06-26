/**
 * Problem: 1551. Minimum Operations to Make Array Equal
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minOperations(n int) int {
	// Calculate minimum operations using formula n * n / 4
	return (n * n) / 4
}
