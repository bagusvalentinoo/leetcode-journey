/**
 * Problem: 2176. Count Equal and Divisible Pairs in an Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of equal and divisible pairs in an array
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} k - The divisor
 *
 * @returns {number} - The count of valid pairs
 */
const countPairs = (nums, k) => {
  const n = nums.length // Length of the array
  let count = 0 // Counter for valid pairs

  // Iterate through all pairs (i, j) where i < j
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      // Check if nums[i] == nums[j] and (i * j) % k == 0
      if (nums[i] === nums[j] && (i * j) % k === 0) count++ // Increment count for valid pairs

  // Return the total count of valid pairs
  return count
}
