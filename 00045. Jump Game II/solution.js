/**
 * Problem: 45. Jump Game II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum jumps to reach the last index
 *
 * @param {number[]} nums - Max jump lengths at each index
 *
 * @returns {number} - Minimum jumps needed
 */
const jump = (nums) => {
  // Initialize the number of jumps needed to reach the end
  let jumpCount = 0,
    // Track the farthest index that can be reached so far
    maxReach = 0,
    // Track the end of the current jump range
    currentJumpEnd = 0

  // Iterate through the array, except for the last element
  for (let index = 0; index < nums.length - 1; index++) {
    // Update the farthest index that can be reached from current position
    maxReach = Math.max(maxReach, index + nums[index])

    // If we've reached the end of the current jump range
    if (index === currentJumpEnd) {
      // Increment the jump count as we need to make another jump
      jumpCount++
      // Update the end of the current jump range to the farthest reachable index
      currentJumpEnd = maxReach
    }
  }

  // Return the minimum number of jumps needed to reach the last index
  return jumpCount
}
