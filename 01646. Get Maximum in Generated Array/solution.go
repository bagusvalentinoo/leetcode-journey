/**
 * Problem: 1646. Get Maximum in Generated Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getMaximumGenerated(n int) int {
	// Handle base cases where array is [0] or [0, 1]
	if n == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}

	// Initialize generated array of length n + 1 with base values
	nums := make([]int, n+1)
	nums[1] = 1

	// Track maximum value seen so far
	maxValue := 1

	// Generate each element from index 2 to n using even/odd rules
	for i := 2; i <= n; i++ {
		// Even index copies value at half index, odd index sums the two middle values
		if i%2 == 0 {
			nums[i] = nums[i/2]
		} else {
			nums[i] = nums[i/2] + nums[i/2+1]
		}

		// Update maximum with newly generated value
		if nums[i] > maxValue {
			maxValue = nums[i]
		}
	}

	// Return the maximum integer in the generated array
	return maxValue
}
