/**
 * Problem: 2537. Count the Number of Good Subarrays
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 32 ms (Beats 100%)
 */

/**
 * Counts good subarrays in nums where each number appears at least k times
 *
 * @param {number[]} nums - Input array of integers
 * @param {number} k - Minimum number of pairs required for a subarray to be "good"
 *
 * @returns {number} - Number of good subarrays
 */
const countGood = (nums, k) => {
  const freq = new Map() // Frequency map to count occurrences of each number

  // Initialize pointers and variables
  let left = 0
  let currentPairs = 0
  let result = 0

  // Sliding window
  for (let right = 0; right < nums.length; right++) {
    const num = nums[right] // Current number

    // Update frequency and pairs
    freq.set(num, (freq.get(num) || 0) + 1)
    currentPairs += freq.get(num) - 1

    // Shrink window until currentPairs < k
    while (currentPairs >= k) {
      // Add valid subarrays
      result += nums.length - right

      // Move left pointer and update frequency
      const leftNum = nums[left]
      currentPairs -= freq.get(leftNum) - 1
      freq.set(leftNum, freq.get(leftNum) - 1)
      left++
    }
  }

  return result
}
