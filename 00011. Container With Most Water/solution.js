/**
 * Problem: 11. Container With Most Water
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate the maximum area of water that can be contained
 *
 * @param {number[]} height - Array of heights
 *
 * @returns {number} - Maximum area of water that can be contained
 */
const maxArea = (height) => {
  // Initialize variables: result, left pointer at start, right pointer at end
  let ans = 0
  let l = 0
  let r = height.length - 1

  // Use two pointers approach moving inward
  while (l < r) {
    // Calculate current width between pointers
    const curW = r - l
    // Calculate current height (limited by the shorter side)
    const curH = Math.min(height[l], height[r])
    // Calculate area with current width and height
    const curArea = curW * curH

    // Update the maximum area found so far
    ans = Math.max(ans, curArea)

    // Move the pointer with shorter height inward to try finding a better area
    height[l] >= height[r] ? (r -= 1) : (l += 1)
  }

  // Return the maximum area found
  return ans
}
