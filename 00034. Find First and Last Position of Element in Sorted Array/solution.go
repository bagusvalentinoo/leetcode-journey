/**
 * Problem: 34. Find First and Last Position of Element in Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func searchRange(nums []int, target int) []int {
	// Find the leftmost position where target could be inserted
	leftPos := sort.Search(len(nums), func(i int) bool {
		return nums[i] >= target
	})

	// Check if target exists in the array
	if leftPos == len(nums) || nums[leftPos] != target {
		return []int{-1, -1}
	}

	// Find the rightmost position of target by searching for first element > target
	rightPos := sort.Search(len(nums) - leftPos, func(i int) bool {
		return nums[leftPos + i] > target
	}) + leftPos - 1
	
	return []int{leftPos, rightPos}
}
