/**
 * Problem: 1855. Maximum Distance Between a Pair of Values
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds maximum distance where nums1[i] <= nums2[j] and i <= j
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 *
 * @returns {number} Maximum distance (j - i) or 0 if not found
 */
const maxDistance = (nums1, nums2) => {
  // Track maximum valid distance found
  let maxDist = 0

  // Initialize pointers for both arrays
  let i = 0,
    j = 0

  // Iterate while both pointers are within bounds
  while (i < nums1.length && j < nums2.length) {
    // Check if condition is satisfied (nums1[i] <= nums2[j])
    if (nums1[i] <= nums2[j]) {
      // Update maximum distance with current index difference
      maxDist = Math.max(maxDist, j - i)
      // Expand window by moving right pointer
      j++
    }
    // If condition fails, move left pointer forward
    else i++
  }

  // Return the maximum valid distance found
  return maxDist
}
