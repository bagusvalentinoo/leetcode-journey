/**
 * Problem: 3355. Zero Array Transformation I
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isZeroArray(nums []int, queries [][]int) bool {
	// Track cumulative operations at each position
	prefixSums := make([]int, len(nums)+1)
	
	// Process each query and record its effect on the prefix sum array
	for _, query := range queries {
		left, right := query[0], query[1]
		prefixSums[left] += 1
		prefixSums[right+1] -= 1
	}

	// Calculate the number of operations applied at each position
	operations := make([]int, len(prefixSums))
	currentSum := 0

	// Accumulate operations from left to right
	for i, delta := range prefixSums {
		currentSum += delta
		operations[i] = currentSum
	}

	// Check if each array element can be reduced to zero
	for i := 0; i < len(nums); i++ {
		if operations[i] < nums[i] {
			return false
		}
	}

	return true
}