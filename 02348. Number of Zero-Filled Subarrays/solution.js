/**
 * Problem: 2348. Number of Zero-Filled Subarrays
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Counts the number of zero-filled subarrays in the given array
 *
 * @param {number[]} nums - The input array of numbers
 *
 * @returns {number} - The total number of zero-filled subarrays
 */
const zeroFilledSubarray = (nums) => {
  // Initialize a variable to keep track of the current streak of consecutive zeros
  let zeroStreak = 0,
    // Initialize a variable to store the total number of zero-filled subarrays found
    totalZeroSubarrays = 0

  // Iterate through each element in the input array
  for (let i = 0; i < nums.length; i++) {
    //
    // If the current element is zero, increment the zero streak counter
    if (nums[i] === 0) {
      zeroStreak++
      // Add the current zero streak to the total count of zero-filled subarrays
      totalZeroSubarrays += zeroStreak
    }
    //
    // If the current element is not zero, reset the zero streak counter
    else zeroStreak = 0
  }

  // Return the total number of zero-filled subarrays found in the array
  return totalZeroSubarrays
}
