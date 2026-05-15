/**
 * Problem: 3427. Sum of Variable Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func subarraySum(nums []int) int {
	// Initialize total sum accumulator
	totalSum := 0

	// Length of the input array
	arrayLength := len(nums)

	// Iterate through each element as the end index of subarray
	for endIndex := 0; endIndex < arrayLength; endIndex++ {
		// Calculate start index, ensuring it's not negative
		startIndex := max(0, endIndex-nums[endIndex])

		// Add all elements from startIndex to endIndex to total sum
		for currentIndex := startIndex; currentIndex <= endIndex; currentIndex++ {
			totalSum += nums[currentIndex]
		}
	}

	// Return the final total sum
	return totalSum
}
