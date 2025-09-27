/**
 * Problem: 812. Largest Triangle Area
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the largest triangle area from given 2D points
 *
 * @param {number[][]} points - Array of [x, y] coordinates
 *
 * @returns {number} - Largest triangle area
 */
const largestTriangleArea = (points) => {
  // Initialize variable to keep track of the maximum triangle area found
  let maxArea = 0

  // Iterate over all possible combinations of three distinct points
  for (let i = 0; i < points.length - 2; i++) {
    // Select the first point of the triangle
    const pointA = points[i]

    for (let j = i + 1; j < points.length - 1; j++) {
      // Select the second point of the triangle
      const pointB = points[j]

      for (let k = j + 1; k < points.length; k++) {
        // Select the third point of the triangle
        const pointC = points[k]

        // Calculate the area of the triangle using the shoelace formula
        const area =
          Math.abs(
            (pointB[0] - pointA[0]) * (pointC[1] - pointA[1]) -
              (pointC[0] - pointA[0]) * (pointB[1] - pointA[1])
          ) / 2

        // Update maxArea if the current area is greater
        if (area > maxArea) maxArea = area
      }
    }
  }

  // Return the largest triangle area found
  return maxArea
}
