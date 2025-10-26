/**
 * Problem: 1283. Find the Smallest Divisor Given a Threshold
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the smallest divisor such that the sum of divisions is <= threshold
 *
 * @param {number[]} nums - Array of integers
 * @param {number} threshold - Maximum allowed sum
 *
 * @returns {number} - Smallest divisor
 */
const smallestDivisor = (nums, threshold) => {
  // Initialize the result variable to store the smallest divisor found (-1 if not found)
  let res = -1,
    // Set the lower bound of the search space to 1
    low = 1,
    // Set the upper bound of the search space to the maximum value in the array
    high = Math.max(...nums)

  // Perform binary search while the search space is valid
  while (low <= high) {
    // Calculate the middle value of the current search space
    const mid = Math.floor((low + high) / 2)

    // Initialize the sum of divisions for the current divisor
    let sum = 0

    // Iterate through the array to calculate the sum of divisions
    for (let i = 0; i < nums.length; i++)
      // Add the ceiling of the division result to the sum
      sum += Math.ceil(nums[i] / mid)

    // Check if the current sum is within the threshold
    if (sum <= threshold) {
      // Update the upper bound to search for smaller divisors
      high = mid - 1
      // Update the result with the current divisor
      res = mid
    }
    // If the sum exceeds the threshold, search for larger divisors
    else low = mid + 1
  }

  // Return the smallest divisor that satisfies the condition
  return res
}
