/**
 * Problem: 154. Find Minimum in Rotated Sorted Array II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findMin(nums []int) int {
	// Initialize left pointer to the start of the array
	leftPointer := 0
	// Initialize right pointer to the end of the array
	rightPointer := len(nums) - 1

	// Perform binary search to find the minimum element
	for leftPointer < rightPointer {
		// Calculate the middle index
		middleIndex := leftPointer + (rightPointer-leftPointer)/2

		// If middle element is greater than rightmost element,
		// minimum lies in the right half
		if nums[middleIndex] > nums[rightPointer] {
			leftPointer = middleIndex + 1
		} else if nums[middleIndex] < nums[leftPointer] {
			// If middle element is less than leftmost element,
			// minimum lies in the left half
			rightPointer = middleIndex
		} else {
			// If elements are equal, decrement right pointer to narrow down
			rightPointer--
		}
	}

	// Return the minimum element found
	return nums[leftPointer]
}
