/**
 * Problem: 2210. Count Hills and Valleys in an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countHillValley(nums []int) int {
	// Initialize the counter for hills and valleys
	hillValleyCount := 0
	// Initialize the index of the previous distinct element
	prevIdx := 0
	
	// Iterate through the array, skipping the first and last elements
	for currIdx := 1; currIdx < len(nums)-1; currIdx++ {
		// Skip if the current element is equal to the next element (to handle duplicates)
		if nums[currIdx] == nums[currIdx+1] {
			continue
		}

		// Check if the current element is a hill (greater than both neighbors)
		if nums[currIdx] > nums[prevIdx] && nums[currIdx] > nums[currIdx+1] {
			hillValleyCount++
		}

		// Check if the current element is a valley (less than both neighbors)
		if nums[currIdx] < nums[prevIdx] && nums[currIdx] < nums[currIdx+1] {
			hillValleyCount++
		}

		// Update the previous distinct element index
		prevIdx = currIdx
	}

	// Return the total count of hills and valleys
	return hillValleyCount
}
