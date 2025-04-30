/**
 * Problem: 939. Minimum Area Rectangle
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 91 ms (Beats 100%)
 */

/**
 * Find minimum area rectangle from given points
 *
 * @param {number[][]} points - Array of [x, y] coordinates
 *
 * @returns {number} Minimum area or 0 if no rectangle possible
 */
const minAreaRect = (points) => {
  // Initialize a set to store points for O(1) lookup
  const pointSet = new Set()

  // Iterate through the points and add them to the set
  for (const [x, y] of points) pointSet.add(1009 * x + y)

  // Initialize the answer to a large number
  let ans = Number.MAX_SAFE_INTEGER

  // Iterate through all pairs of points
  for (let i = 0; i < points.length; ++i) {
    // Get the first point
    const p1 = points[i]

    // Iterate through the remaining points to find pairs
    for (let j = i + 1; j < points.length; ++j) {
      //
      const p2 = points[j]

      // If the points are not on the same line (x or y)
      if (p1[0] !== p2[0] && p1[1] !== p2[1])
        if (
          pointSet.has(1009 * p1[0] + p2[1]) &&
          pointSet.has(1009 * p2[0] + p1[1])
        )
          // Calculate the area of the rectangle formed by the points
          ans = Math.min(ans, Math.abs(p2[0] - p1[0]) * Math.abs(p2[1] - p1[1]))
    }
  }

  // Return the minimum area found, or 0 if no rectangle is possible
  return ans < Number.MAX_SAFE_INTEGER ? ans : 0
}
