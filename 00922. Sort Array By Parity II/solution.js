/**
 * Problem: 922. Sort Array By Parity II
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sorts an array of integers by parity
 *
 * Sorts array of integers by parity
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[]} - Sorted array with even numbers at even indices and odd numbers at odd indices
 */
const sortArrayByParityII = (nums) => {
  // Iterate over even indices
  for (let i = 0, j = 1; i < nums.length; i += 2)
    // If current number is odd
    if (nums[i] % 2) {
      // Find next even number
      while (nums[j] % 2)
        j += 2
        // Swap
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }

  // Return sorted array
  return nums
}
