/**
 * Problem: 3285. Find Indices of Stable Mountains
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds indices where previous mountain height exceeds threshold
 *
 * @param {number[]} height - Array of mountain heights
 * @param {number} threshold - Height threshold value
 *
 * @returns {number[]} Indices where previous height > threshold
 */
const stableMountains = (height, threshold) => {
  // Array to store indices meeting the condition
  const validIndices = []

  // Iterate through heights starting from index 1 (need previous element)
  for (let currentIndex = 1; currentIndex < height.length; currentIndex++) {
    // If previous mountain height exceeds threshold, add current index
    if (height[currentIndex - 1] > threshold) validIndices.push(currentIndex)
  }

  // Return the array of valid indices
  return validIndices
}
