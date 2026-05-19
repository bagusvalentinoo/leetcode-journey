/**
 * Problem: 2540. Minimum Common Value
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getCommon(nums1 []int, nums2 []int) int {
	// Default answer if no common element found
	defaultAnswer := -1

	// Initialize pointers for both arrays
	pointer1, pointer2 := 0, 0

	// Iterate while both pointers are within array bounds
	for pointer1 < len(nums1) && pointer2 < len(nums2) {
		// If elements are equal, return the common element
		if nums1[pointer1] == nums2[pointer2] {
			return nums1[pointer1]
		} else if nums1[pointer1] < nums2[pointer2] {
			// If element in nums1 is smaller, move pointer in nums1 forward
			pointer1++
		} else {
			// If element in nums2 is smaller, move pointer in nums2 forward
			pointer2++
		}
	}

	// No common element found
	return defaultAnswer
}
