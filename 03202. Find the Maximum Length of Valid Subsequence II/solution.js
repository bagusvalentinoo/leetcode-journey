/**
 * Problem: 3202. Find the Maximum Length of Valid Subsequence II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 112 ms (Beats 100%)
 */

/**
 * Finds the maximum length of a subsequence with sum divisible by k
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - Divisor value
 *
 * @returns {number} - Maximum subsequence length
 */
const maximumLength = (nums, k) => {
  // Initialize result to 2 (minimum possible subsequence length for this problem)
  let result = 2

  // Iterate through each possible remainder when dividing by k
  for (let targetRemainder = 0; targetRemainder < k; targetRemainder++) {
    // Create dynamic programming array to store max length for each remainder
    const dpMaxLength = Array(k).fill(0)

    // Process each number in the input array
    for (let index = 0; index < nums.length; index++) {
      // Calculate remainder of current number when divided by k
      const currentRemainder = nums[index] % k

      // Find the complementary remainder that pairs with current remainder
      // to achieve the target remainder when their sum is divided by k
      const complementaryRemainder =
        (targetRemainder - currentRemainder + k) % k

      // Update max length for current remainder by extending subsequence
      // that ends with complementary remainder
      dpMaxLength[currentRemainder] = dpMaxLength[complementaryRemainder] + 1
    }

    // Update global result with maximum length found for current target remainder
    result = Math.max(result, ...dpMaxLength)
  }

  // Return the maximum subsequence length found
  return result
}
