/**
 * Problem: 995. Minimum Number of K Consecutive Bit Flips
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minKBitFlips(nums []int, k int) int {
	// Number of elements in the array
	n := len(nums)
	// Tracks which positions we flipped at
	flippedAt := make([]bool, n)
	// Current flip state (0 or 1)
	flipState := 0
	// Count of flips performed
	flipCount := 0

	for i := 0; i < n; i++ {
		// When we leave the window of a previous flip, toggle the state
		if i >= k && flippedAt[i-k] {
			flipState ^= 1
		}
		// If current bit needs flipping (after accounting for current flip state)
		if nums[i] ^ flipState != 1 {
			// Cannot perform a complete K-length flip
			if i + k > n {
				return -1
			}
			
			// Record this position as flipped
			flippedAt[i] = true
			// Toggle the flip state
			flipState ^= 1
			// Increment flip counter
			flipCount += 1
		}
	}

	return flipCount
}