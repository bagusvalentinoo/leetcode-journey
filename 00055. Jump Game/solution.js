/**
 * Problem: 55. Jump Game
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if you can reach the last index
 *
 * @param {number[]} nums - Array of non-negative integers
 *
 * @returns {boolean} True if last index is reachable
 */
const canJump = (nums) => {
  // If array has 0 or 1 element, already at last index
  if (nums.length <= 1) return true

  // Track the farthest reachable index so far
  let farthestReach = nums[0]

  // Iterate through each position
  for (let i = 0; i < nums.length; i++) {
    // If we can't go further and current position is zero, stuck
    if (farthestReach <= i && nums[i] === 0) return false
    // Update farthest reachable index from current position
    if (i + nums[i] > farthestReach) farthestReach = i + nums[i]
    // If we can reach or exceed last index, success
    if (farthestReach >= nums.length - 1) return true
  }

  // If loop finishes without reaching last index
  return false
}
