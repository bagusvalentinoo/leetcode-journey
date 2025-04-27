/**
 * Problem: 3392. Count Subarrays of Length Three With a Condition
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts length-3 subarrays where the sum of first and third elements equals half the middle element
 *
 * @param {number[]} nums - The input array of integers
 *
 * @returns {number} - The count of valid subarrays
 */
const countSubarrays = (nums) => {
  // Initialize count
  let count = 0

  // Iterate over the array
  for (let i = 0; i < nums.length - 2; i++)
    // Check if the subarray is valid
    if ((nums[i] + nums[i + 2]) * 2 === nums[i + 1]) count++

  // Return the count
  return count
}
