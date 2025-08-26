/**
 * Problem: 3000. Maximum Area of Longest Diagonal Rectangle
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the area of the rectangle with the longest diagonal
 *
 * @param {number[][]} dimensions - Array of [length, breadth] pairs
 *
 * @returns {number} - Area of the rectangle
 */
const areaOfMaxDiagonal = (dimensions) => {
  // Initialize variables to keep track of the maximum area and diagonal found so far
  let maxArea = 0,
    maxDiagonal = 0

  // Iterate through each rectangle's dimensions in the input array
  for (const [length, breadth] of dimensions) {
    // Calculate the diagonal length using the Pythagorean theorem
    const diagonal = Math.sqrt(length * length + breadth * breadth)
    // Calculate the area of the rectangle
    const area = length * breadth

    // Update maxDiagonal and maxArea if a longer diagonal is found,
    // or if the diagonal is equal but the area is larger
    if (
      diagonal > maxDiagonal ||
      (diagonal === maxDiagonal && area > maxArea)
    ) {
      maxDiagonal = diagonal
      maxArea = area
    }
  }

  // Return the area of the rectangle with the longest diagonal
  return maxArea
}
