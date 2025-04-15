/**
 * Problem: 905. Sort Array By Parity
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sort array by parity
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number[]} - Sorted by parity (even first)
 */
const sortArrayByParity = (nums) => {
  let l = 0 // Left pointer

  // Iterate through array
  for (let r = 0; r < nums.length; r++) {
    // If current number is even
    if (nums[r] % 2 === 0) {
      // Swap with left pointer
      const tmp = nums[l]
      nums[l] = nums[r]
      nums[r] = tmp

      l++
    }
  }

  // Return sorted array
  return nums
}
