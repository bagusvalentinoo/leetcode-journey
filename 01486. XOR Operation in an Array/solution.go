/**
 * Problem: 1486. XOR Operation in an Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func xorOperation(n int, start int) int {
	// Initialize result with first element
	xorResult := start

	// XOR all subsequent elements (start + 2 * i)
	for i := 1; i < n; i++ {
		xorResult ^= start + 2*i
	}

	// Return the final XOR result
	return xorResult
}
