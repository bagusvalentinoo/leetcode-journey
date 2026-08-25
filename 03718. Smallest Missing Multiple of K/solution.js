/**
 * Problem: 3718. Smallest Missing Multiple of K
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the smallest positive multiple of k missing from nums
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - The divisor integer
 *
 * @returns {number} The smallest missing positive multiple of k
 */
const missingMultiple = (nums, k) => {
  // Store array elements in a Set for O(1) lookup
  const numSet = new Set(nums)

  // Start with the first positive multiple of k
  let target = k

  // Increment by k until finding a multiple not present in nums
  while (numSet.has(target)) target += k

  // Return the smallest missing multiple
  return target
}
