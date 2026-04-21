/**
 * Problem: 3833. Count Dominant Indices
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func dominantIndices(nums []int) int {
	// Get length of the array
	n := len(nums)

	// Counter for dominant indices found
	count := 0

	// Calculate total sum of all elements in the array
	totalSum := 0

	// Sum all elements in the array
	for i := 0; i < n; i++ {
		totalSum += nums[i]
	}

	// Initialize suffix sum as total sum (will subtract elements as we go)
	suffixSum := totalSum

	// Iterate through each element except the last one
	for i := 0; i < n-1; i++ {
		// Remove current element from suffix sum (elements to the right)
		suffixSum -= nums[i]

		// Calculate number of elements to the right of current index
		suffixLength := n - i - 1

		// Check if current element multiplied by suffix length is greater than suffix sum
		// This is equivalent to nums[i] > suffixSum / suffixLength
		if nums[i]*suffixLength > suffixSum {
			count++
		}
	}

	// Return the count of dominant indices
	return count
}
