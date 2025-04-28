/**
 * Problem: 2302. Count Subarrays With Score Less Than K
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

/**
 * Counts the number of subarrays with score strictly less than k
 *
 * @param {number[]} nums - The input array of positive integers
 * @param {number} k - The threshold score
 *
 * @returns {number} - The count of valid subarrays
 */
const countSubarrays = (nums, k) => {
  // Initialize left pointer
  let left = 0

  // Initialize sum and count
  let sum = 0
  let count = 0

  // Iterate over array with right pointer
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right] // Add current element to sum

    // Shrink window until sum * (right - left + 1) < k
    while (sum * (right - left + 1) >= k) {
      sum -= nums[left] // Remove leftmost element from sum
      left++ // Move left pointer to the right
    }

    // Add number of valid subarrays ending at current position
    count += right - left + 1
  }

  // Return count of valid subarrays
  return count
}
