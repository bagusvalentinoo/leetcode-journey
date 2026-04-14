/**
 * Problem: 3880. Minimum Absolute Difference Between Two Values
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum absolute difference between non-zero unequal adjacent values
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Minimum difference or -1 if not found
 */
const minAbsoluteDifference = (nums) => {
  // Initialize minimum difference to infinity
  let minDiff = Infinity

  // Track last non-zero index
  let lastIndex = -1

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Skip zero values
    if (nums[i] !== 0) {
      // If we have a previous non-zero and values are different, update minDiff
      if (lastIndex !== -1 && nums[lastIndex] !== nums[i])
        minDiff = Math.min(minDiff, i - lastIndex)

      // Update last non-zero index
      lastIndex = i
    }
  }

  // Return -1 if no valid difference found, otherwise return minDiff
  return minDiff === Infinity ? -1 : minDiff
}
