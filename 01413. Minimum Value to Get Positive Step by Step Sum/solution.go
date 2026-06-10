/**
 * Problem: 1413. Minimum Value to Get Positive Step by Step Sum
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minStartValue(nums []int) int {
	// Variable to store running prefix sum
	runningPrefixSum := 0
	// Variable to track minimum prefix sum encountered
	minimumPrefix := int(^uint(0) >> 1) // Max int

	// Calculate prefix sums and find the minimum
	for i := 0; i < len(nums); i++ {
		// Add current element to running prefix sum
		runningPrefixSum += nums[i]

		// Update minimum prefix sum if current is smaller
		if runningPrefixSum < minimumPrefix {
			minimumPrefix = runningPrefixSum
		}
	}

	// Calculate the required starting value to offset the minimum prefix sum
	result := 1 - minimumPrefix

	// If the result is less than 1, we only need to start with 1
	if result < 1 {
		return 1
	}

	// Otherwise, return the calculated starting value
	return result
}
