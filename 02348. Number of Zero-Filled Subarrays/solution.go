/**
 * Problem: 2348. Number of Zero-Filled Subarrays
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func zeroFilledSubarray(nums []int) int64 {
	// Initialize totalCount to store the total number of zero-filled subarrays found.
	// Initialize zeroCount to keep track of the current consecutive zeros.
	var totalCount, zeroCount int64
	zeroCount = 0
	totalCount = 0

	// Iterate through each number in the input slice.
	for _, num := range nums {
		// If the current number is zero, increment the count of consecutive zeros.
		if num == 0 {
			zeroCount++
		} else {
			// If the current number is not zero, reset the consecutive zero count.
			zeroCount = 0
		}

		// Add the current consecutive zero count to the total count.
		totalCount += zeroCount
	}

	// Return the total number of zero-filled subarrays.
	return totalCount
}
