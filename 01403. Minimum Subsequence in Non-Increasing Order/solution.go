/**
 * Problem: 1403. Minimum Subsequence in Non-Increasing Order
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minSubsequence(nums []int) []int {
	// Sort array in descending order to pick largest elements first
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))

	// Initialize variable to store the sum of all elements
	totalSum := 0

	// Iterate through each element in the array to calculate total sum
	for _, num := range nums {
		totalSum += num
	}

	// Track sum of the current subsequence
	subsequenceSum := 0

	// Slice to store the resulting subsequence
	result := make([]int, 0)

	// Iterate through sorted array from largest to smallest
	for i := 0; i < len(nums); i++ {
		// Add current element to subsequence sum
		subsequenceSum += nums[i]

		// Add current element to result slice
		result = append(result, nums[i])

		// If subsequence sum exceeds remaining sum, return result
		if subsequenceSum > totalSum-subsequenceSum {
			return result
		}
	}

	// Return the result (should not reach here under normal conditions)
	return result
}
