/**
 * Problem: 1855. Maximum Distance Between a Pair of Values
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxDistance(nums1 []int, nums2 []int) int {
	// Track maximum valid distance found
	maxDist := 0

	// Initialize pointers for both arrays
	i, j := 0, 0

	// Iterate while both pointers are within bounds
	for i < len(nums1) && j < len(nums2) {
		// Check if condition is satisfied (nums1[i] <= nums2[j])
		if nums1[i] <= nums2[j] {
			// Update maximum distance with current index difference
			if j-i > maxDist {
				maxDist = j - i
			}

			// Expand window by moving right pointer
			j++
		} else {
			// If condition fails, move left pointer forward
			i++
		}
	}

	// Return the maximum valid distance found
	return maxDist
}
