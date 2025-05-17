/**
 * Problem: 75. Sort Colors
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sorts an array of 0s, 1s, and 2s in place (Dutch National Flag algorithm)
 *
 * @param {number[]} nums - Input array
 *
 * @returns {void}
 */
const sortColors = (nums) => {
  // low: boundary for 0s, mid: current element, high: boundary for 2s
  let low = 0,
    mid = 0,
    high = nums.length - 1

  // Process until we've examined all elements
  while (mid <= high) {
    // Case 1: 0 found - swap with low boundary and advance both pointers
    if (nums[mid] === 0) {
      ;[nums[low], nums[mid]] = [nums[mid], nums[low]]
      low++
      mid++
    }
    // Case 2: 2 found - swap with high boundary and move high pointer
    else if (nums[mid] === 2) {
      ;[nums[mid], nums[high]] = [nums[high], nums[mid]]
      high--
    }
    // Case 3: 1 found - just advance mid pointer
    else mid++
  }
}
