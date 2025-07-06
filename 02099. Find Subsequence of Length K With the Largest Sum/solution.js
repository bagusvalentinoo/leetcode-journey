/**
 * Problem: 2099. Find Subsequence of Length K With the Largest Sum
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the k largest elements from nums in their original order
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Number of elements to select
 *
 * @returns {number[]} - K largest elements in original order
 */
const maxSubsequence = (nums, k) =>
  new Int32Array(nums)
    .map((x, i) => (x << 11) | i)
    .sort()
    .slice(-k)
    .map((x) => (x << 21) | (x >>> 11))
    .sort()
    .map((x) => (x << 11) >> 11)
