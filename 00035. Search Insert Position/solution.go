/**
 * Problem: 35. Search Insert Position
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func searchInsert(nums []int, target int) int {
	// Use binary search to find the position to insert target
	start, end := 0, len(nums)-1

	for start <= end {
		// Calculate middle index to avoid overflow
		mid := start + (end-start)/2

		if nums[mid] < target {
			// Target is in right half, move start pointer
			start = mid + 1
		} else if nums[mid] > target {
			// Target is in left half, move end pointer
			end = mid - 1
		} else {
			// Target found, return its position
			return mid
		}
	}
	
	// Target not found, return insertion position
	return start
}