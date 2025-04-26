/**
 * Problem: 2444. Count Subarrays With Fixed Bounds
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Counts the number of fixed-bound subarrays where min is minK and max is maxK
 *
 * @param {number[]} nums - The input array of numbers
 * @param {number} minK - The minimum value required in the subarray
 * @param {number} maxK - The maximum value required in the subarray
 *
 * @returns {number} - The count of valid fixed-bound subarrays
 */
const countSubarrays = (nums, minK, maxK) => {
  // Total count of valid subarrays
  let total = 0

  // Last seen index of minK and maxK
  let lastMin = -1
  let lastMax = -1

  // Last seen index of out of bounds
  let lastOutOfBound = -1

  // Iterate through the array
  for (let p = 0; p < nums.length; p++) {
    // If current element is minK or maxK, update last seen index
    if (nums[p] === minK) lastMin = p
    if (nums[p] === maxK) lastMax = p

    // If current element is out of bounds, update last seen index
    if (nums[p] > maxK || nums[p] < minK) lastOutOfBound = p

    // Add the number of valid subarrays ending at current position
    total += Math.max(Math.min(lastMin, lastMax) - lastOutOfBound, 0)
  }

  // Return total count of valid subarrays
  return total
}
