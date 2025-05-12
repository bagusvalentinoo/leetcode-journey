/**
 * Problem: 961. N-Repeated Element in Size 2N Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the element repeated n times in a 2n-sized array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - The repeated element
 */
const repeatedNTimes = (nums) => {
  while (true) {
    const i = Math.floor(Math.random() * nums.length)
    const j = Math.floor(Math.random() * nums.length)

    if (i !== j && nums[i] === nums[j]) return nums[i]
  }
}
