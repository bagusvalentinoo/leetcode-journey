/**
 * Problem: 962. Maximum Width Ramp
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Finds maximum width ramp in an array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Maximum width ramp
 */
const maxWidthRamp = (nums) => {
  // Store indices of decreasing elements to check for potential ramp starts
  const stack = []
  let maxWidth = 0

  // First pass: build a stack of indices where values are in decreasing order
  for (let i = 0; i < nums.length; i++)
    if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]])
      stack.push(i)

  // Second pass: scan from right to left to find valid ramps
  for (let j = nums.length - 1; j >= 0; j--) {
    // Find all valid ramps ending at position j
    while (stack.length > 0 && nums[j] >= nums[stack[stack.length - 1]]) {
      // Pop the last index from the stack
      const i = stack.pop()

      // Calculate width and update maximum
      maxWidth = Math.max(maxWidth, j - i)
    }
  }

  return maxWidth
}
