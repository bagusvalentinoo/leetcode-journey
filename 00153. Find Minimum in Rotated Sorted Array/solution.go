/**
 * Problem: 153. Find Minimum in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findMin(nums []int) int {
	// Initialize left and right pointer to start and end of array
	leftPointer := 0
	rightPointer := len(nums) - 1

	// Binary search to find the minimum element
	for leftPointer < rightPointer {
		// Calculate middle index
		middleIndex := leftPointer + (rightPointer-leftPointer)/2

		// If middle element is greater than rightmost element,
		// minimum is in the right half
		if nums[middleIndex] > nums[rightPointer] {
			leftPointer = middleIndex + 1
		} else {
			// Otherwise, minimum is in the left half (including middle)
			rightPointer = middleIndex
		}
	}

	// Return the minimum element
	return nums[leftPointer]
}
