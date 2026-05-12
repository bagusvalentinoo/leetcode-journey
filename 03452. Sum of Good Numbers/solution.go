/**
 * Problem: 3452. Sum of Good Numbers
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumOfGoodNumbers(nums []int, k int) int {
	// Initialize sum accumulator
	totalSum := 0

	// Length of the input array
	arrayLength := len(nums)

	// Iterate through each element in the array
	for index := 0; index < arrayLength; index++ {
		// Check left neighbor at distance k
		if index >= k && nums[index] <= nums[index-k] {
			continue
		}
		// Check right neighbor at distance k
		if index+k < arrayLength && nums[index] <= nums[index+k] {
			continue
		}

		// Element is greater than both neighbors (or neighbors don't exist)
		totalSum += nums[index]
	}

	// Return sum of good numbers
	return totalSum
}
