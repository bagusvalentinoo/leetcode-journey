/**
 * Problem: 2200. Find All K-Distant Indices in an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findKDistantIndices(nums []int, key int, k int) []int {
	// Result slice to store k-distant indices
	result := []int{}
	// Right boundary pointer for the current range
	rightBoundary := 0
	// Total length of the input array
	arrayLength := len(nums)

	// Iterate through each element to find keys
	for index := 0; index < arrayLength; index++ {
		if nums[index] == key {
			// Calculate left boundary of k-distance range
			leftBoundary := max(rightBoundary, index-k)

			// Update right boundary for next iteration
			rightBoundary = min(arrayLength-1, index+k) + 1

			// Add all indices in the k-distance range to result
			for i := leftBoundary; i < rightBoundary; i++ {
				result = append(result, i)
			}
		}
	}

	return result
}
