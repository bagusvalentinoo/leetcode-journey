/**
 * Problem: 27. Remove Element
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func removeElement(nums []int, val int) int {
	// Position where non-matching elements should be written
	k := 0
	
	// Iterate through all elements
	for i := 0; i < len(nums); i++ {
		// If current element is not the value to remove
		if nums[i] != val {
			// Copy the element to the write position and advance
			nums[k] = nums[i]
			k++
		}
	}

	// Return count of elements that weren't removed
	return k
}