/**
 * Problem: 1752. Check if Array Is Sorted and Rotated
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func check(nums []int) bool {
	// Counter for breaks where current element is greater than next
	breakCount := 0
	// Length of the input array
	arrayLength := len(nums)

	// Iterate through each element and compare with next (circular)
	for currentIndex := 0; currentIndex < arrayLength; currentIndex++ {
		// Check if current element is greater than next element (wrap around at end)
		if nums[currentIndex] > nums[(currentIndex+1)%arrayLength] {
			breakCount++
		}
	}

	// Array is valid if there is at most one break point
	return breakCount <= 1
}
