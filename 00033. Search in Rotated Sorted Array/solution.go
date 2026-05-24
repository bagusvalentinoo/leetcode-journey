/**
 * Problem: 33. Search in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func search(nums []int, target int) int {
	// Initialize left and right pointers for binary search
	leftPointer := 0
	rightPointer := len(nums) - 1

	// Perform binary search while pointers haven't crossed
	for leftPointer <= rightPointer {
		// Calculate middle index
		middleIndex := leftPointer + (rightPointer-leftPointer)/2

		// If middle element is target, return its index
		if nums[middleIndex] == target {
			return middleIndex
		}
		// Check if left half is sorted (no rotation break in left half)
		if nums[leftPointer] <= nums[middleIndex] {
			// If target lies within the sorted left half, search left
			if nums[leftPointer] <= target && target < nums[middleIndex] {
				rightPointer = middleIndex - 1
			} else {
				// Otherwise, search right half
				leftPointer = middleIndex + 1
			}
		} else {
			// Right half must be sorted (rotation break in left half)
			// If target lies within the sorted right half, search right
			if nums[middleIndex] < target && target <= nums[rightPointer] {
				leftPointer = middleIndex + 1
			} else {
				// Otherwise, search left half
				rightPointer = middleIndex - 1
			}
		}
	}

	// Target not found
	return -1
}
