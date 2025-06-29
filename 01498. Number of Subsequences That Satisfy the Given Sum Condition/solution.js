/**
 * Problem: 1498. Number of Subsequences That Satisfy the Given Sum Condition
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 88 ms (Beats 100%)
 */

/**
 * Counts subsequences where min + max elements <= target
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - Maximum sum of min and max elements
 *
 * @returns {number} - Count of valid subsequences mod 10^9 + 7
 */
const numSubseq = (nums, target) => {
  const MOD = 10 ** 9 + 7
  // Precompute powers of 2 for subsequence counting
  const powersOfTwo = []

  powersOfTwo[0] = 1

  // Calculate 2^i mod MOD for each position
  for (let i = 1; i < nums.length; i++)
    powersOfTwo[i] = (powersOfTwo[i - 1] * 2) % MOD

  // Sort array to use two-pointer technique
  nums.sort((a, b) => a - b)

  let count = 0
  let left = 0,
    right = nums.length - 1

  // Use two pointers to find valid subsequences
  while (left <= right) {
    // If sum exceeds target, move right pointer left
    if (nums[left] + nums[right] > target) right--
    // If sum is valid, count all subsequences with nums[left] as minimum
    else {
      count = (count + powersOfTwo[right - left]) % MOD
      left++
    }
  }

  return count
}
