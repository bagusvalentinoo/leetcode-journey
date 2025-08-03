/**
 * Problem: 2106. Maximum Fruits Harvested After at Most K Steps
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Returns the minimum steps to collect fruits from left to right, starting at startPos
 *
 * @param {number[][]} fruits - Array of [position, amount]
 * @param {number} startPos - Starting position
 * @param {number} left - Left index
 * @param {number} right - Right index
 *
 * @returns {number} - Minimum steps needed
 */
const minStep = (fruits, startPos, left, right) =>
  Math.min(
    Math.abs(startPos - fruits[right][0]),
    Math.abs(startPos - fruits[left][0])
  ) +
  fruits[right][0] -
  fruits[left][0]

/**
 * Returns the max fruits collectable from startPos within k steps
 *
 * @param {number[][]} fruits - [position, amount] pairs
 * @param {number} startPos - Starting position
 * @param {number} k - Max steps allowed
 *
 * @returns {number} - Max fruits collectable
 */
const maxTotalFruits = (fruits, startPos, k) => {
  // Initialize left pointer for sliding window
  let left = 0,
    // Initialize right pointer for sliding window
    right = 0,
    // Variable to keep track of current sum of fruits in window
    sum = 0,
    // Variable to store the maximum fruits collectable
    ans = 0
  // Get the total number of fruit positions
  const n = fruits.length

  // Iterate through all fruit positions using right pointer
  while (right < n) {
    // Add the amount of fruits at the current right position to sum
    sum += fruits[right][1]

    // Shrink window from the left if minimum steps exceed k
    while (left <= right && minStep(fruits, startPos, left, right) > k) {
      // Subtract the amount of fruits at the current left position from sum
      sum -= fruits[left][1]
      // Move left pointer to the right
      left++
    }

    // Update the answer with the maximum sum found so far
    ans = Math.max(ans, sum)
    // Move right pointer to the next position
    right++
  }

  // Return the maximum fruits collectable within k steps
  return ans
}
