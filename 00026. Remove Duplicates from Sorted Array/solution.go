/**
 * Problem: 26. Remove Duplicates from Sorted Array
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func removeDuplicates(nums []int) int {
	// uniquePosition tracks where to place the next unique value
	uniquePosition := 1

	for i := 1; i < len(nums); i++ {
		// If current element is different from previous, it's unique
		if nums[i] != nums[i-1] {
			// Place the unique element at uniquePosition
			nums[uniquePosition] = nums[i]
			// Move uniquePosition forward for next unique element
			uniquePosition++
		}
	}
	
	// Return count of unique elements
	return uniquePosition
}