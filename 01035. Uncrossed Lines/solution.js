/**
 * Problem: 1035. Uncrossed Lines
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/**
 * Finds the maximum number of uncrossed lines between two arrays
 *
 * @param {number[]} nums1 - First array
 * @param {number[]} nums2 - Second array
 *
 * @returns {number} - Maximum number of uncrossed lines
 */
const maxUncrossedLines = (nums1, nums2) => {
  // Create a 2D DP table where dp[i][j] represents the maximum uncrossed lines
  // between the first i elements of nums1 and first j elements of nums2
  const dpTable = Array.from({ length: nums1.length + 1 }, () =>
    Array(nums2.length + 1).fill(0)
  )

  // Iterate through each element in nums1 (i represents current position in nums1)
  for (let i = 1; i <= nums1.length; i++) {
    // Iterate through each element in nums2 (j represents current position in nums2)
    for (let j = 1; j <= nums2.length; j++) {
      // If current elements match, we can draw a line between them
      // Add 1 to the result from the previous diagonal position
      if (nums1[i - 1] === nums2[j - 1])
        dpTable[i][j] = dpTable[i - 1][j - 1] + 1
      // If elements don't match, take the maximum from either:
      // - excluding current element from nums1 (dpTable[i - 1][j])
      // - excluding current element from nums2 (dpTable[i][j - 1])
      else dpTable[i][j] = Math.max(dpTable[i - 1][j], dpTable[i][j - 1])
    }
  }

  // Return the maximum uncrossed lines using all elements from both arrays
  return dpTable[nums1.length][nums2.length]
}
