/**
 * Problem: 2540. Minimum Common Value
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the smallest common element in two sorted arrays
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 *
 * @returns {number} Smallest common element or -1 if none exists
 */
const getCommon = (nums1, nums2) => {
  // Default answer if no common element found
  const defaultAnswer = -1

  // Initialize pointers for both arrays
  let pointer1 = 0,
    pointer2 = 0

  // Iterate while both pointers are within array bounds
  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    // If elements are equal, return the common element
    if (nums1[pointer1] === nums2[pointer2]) return nums1[pointer1]
    // If element in nums1 is smaller, move pointer in nums1 forward
    else if (nums1[pointer1] < nums2[pointer2]) pointer1++
    // If element in nums2 is smaller, move pointer in nums2 forward
    else pointer2++
  }

  // No common element found
  return defaultAnswer
}
