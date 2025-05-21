/**
 * Problem: 976. Largest Perimeter Triangle
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Returns the largest possible perimeter of a triangle from given side lengths.
 *
 * @param {number[]} nums - Array of side lengths
 *
 * @returns {number} - Largest valid perimeter or 0 if no valid triangle possible
 */
const largestPerimeter = (nums) => {
  // Helper function to extract the maximum value from nums array
  const extractMax = () => {
    const max = Math.max(...nums)
    const index = nums.indexOf(max)

    nums[index] = nums.at(-1)
    nums.pop()

    return max
  }

  // Initialize with the two largest sides
  let largestSide = extractMax(),
    secondSide = extractMax()

  // Check each possible third side of the triangle
  while (nums.length > 0) {
    const thirdSide = extractMax()

    // Check if these sides can form a valid triangle
    if (largestSide < secondSide + thirdSide)
      return largestSide + secondSide + thirdSide

    // Shift sides for next iteration
    largestSide = secondSide
    secondSide = thirdSide
  }

  // Return 0 if no valid triangle can be formed
  return 0
}
