/**
 * Problem: 915. Partition Array into Disjoint Intervals
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Partitions array into two subarrays, `left` and `right`, such that
 * each element in `left` is <= each element in `right`.
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Length of `left` subarray
 */
const partitionDisjoint = (nums) => {
  // Initialize variables
  let maxLeft = nums[0],
    maxLeftIndex = 0,
    maxRight = nums[0]

  // Iterate through the array
  for (let i = 1; i < nums.length; i++) {
    // Update maxLeft and maxLeftIndex if current element is less than maxLeft
    if (nums[i] < maxLeft) {
      maxLeft = maxRight
      maxLeftIndex = i
    }
    // Update maxRight
    else maxRight = Math.max(maxRight, nums[i])
  }

  // Return length of left subarray
  return maxLeftIndex + 1
}
