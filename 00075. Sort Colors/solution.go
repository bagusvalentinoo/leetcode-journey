/**
 * Problem: 75. Sort Colors
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sortColors(nums []int) {
	// Dutch national flag algorithm: use 3 pointers to sort 0s, 1s, and 2s in a single pass
	low, mid, high := 0, 0, len(nums)-1

	for mid <= high {
		switch nums[mid] {
		case 0:
			// Move 0 to the left side by swapping with low pointer
			nums[low], nums[mid] = nums[mid], nums[low]
			low++
			mid++
		case 1:
			// Keep 1s in the middle
			mid++
		case 2:
			// Move 2 to the right side by swapping with high pointer
			nums[mid], nums[high] = nums[high], nums[mid]
			high--
		}
	}
}