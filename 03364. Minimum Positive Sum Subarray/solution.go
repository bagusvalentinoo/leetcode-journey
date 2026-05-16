/**
 * Problem: 3364. Minimum Positive Sum Subarray
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumSumSubarray(nums []int, l int, r int) int {
	// Initialize minimum sum to maximum integer value
	minPositiveSum := int(^uint(0) >> 1) // Max int

	// Get the size of the input array
	arraySize := len(nums)

	// Iterate through each possible starting index
	for startIdx := 0; startIdx < arraySize; startIdx++ {
		// Initialize sum for current subarray
		currentSum := 0
		// Counter for subarray length
		subarrayLength := 0

		// Expand subarray from startIdx to endIdx
		for endIdx := startIdx; endIdx < arraySize; endIdx++ {
			// Add current element to sum
			currentSum += nums[endIdx]
			// Increment subarray length counter
			subarrayLength++

			// Check if subarray length is within the allowed range [l, r]
			if subarrayLength >= l && subarrayLength <= r {
				// If sum is positive, update minimum
				if currentSum > 0 && currentSum < minPositiveSum {
					minPositiveSum = currentSum
				}
				// If we've reached maximum length, stop expanding
				if subarrayLength == r {
					break
				}
			}
		}
	}

	// Return -1 if no positive sum found
	if minPositiveSum == int(^uint(0)>>1) {
		return -1
	}

	// Return the minimum positive sum
	return minPositiveSum
}
