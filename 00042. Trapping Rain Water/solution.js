/**
 * Problem: 42. Trapping Rain Water
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns total trapped rainwater for given elevation map
 *
 * @param {number[]} height - Elevation heights
 *
 * @returns {number} - Total trapped water
 */
const trap = (height) => {
  // Initialize two pointers for the left and right ends of the elevation map
  let left = 0,
    right = height.length - 1

  // Track the maximum height seen so far from the left and right
  let leftMax = 0,
    rightMax = 0

  // Accumulate the total trapped water
  let water = 0

  // Loop until the two pointers meet
  while (left < right) {
    // If the left height is less than the right height
    if (height[left] < height[right]) {
      // If current left height is greater than or equal to leftMax, update leftMax
      height[left] >= leftMax
        ? (leftMax = height[left])
        : // Otherwise, add the difference to water (trapped water at this position)
          (water += leftMax - height[left])

      // Move the left pointer to the right
      left++
    } else {
      // If current right height is greater than or equal to rightMax, update rightMax
      height[right] >= rightMax
        ? (rightMax = height[right])
        : // Otherwise, add the difference to water (trapped water at this position)
          (water += rightMax - height[right])

      // Move the right pointer to the left
      right--
    }
  }

  // Return the total trapped water
  return water
}
