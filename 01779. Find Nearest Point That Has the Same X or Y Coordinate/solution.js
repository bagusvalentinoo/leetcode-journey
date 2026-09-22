/**
 * Problem: 1779. Find Nearest Point That Has the Same X or Y Coordinate
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find index of valid point with smallest Manhattan distance
 *
 * @param {number} x - Current x-coordinate
 * @param {number} y - Current y-coordinate
 * @param {number[][]} points - Array of [ai, bi] points
 *
 * @returns {number} Index of nearest valid point, or -1 if none exists
 */
const nearestValidPoint = (x, y, points) => {
  // Track smallest distance found and its index, default to no valid point
  let smallestDistance = Infinity, answerIndex = -1

  // Scan each point in order to keep smallest index on ties
  for (let i = 0; i < points.length; i++) {
    // Read coordinates of current point
    const pointX = points[i][0], pointY = points[i][1]

    // Skip points sharing neither x nor y with current location
    if (pointX !== x && pointY !== y) continue

    // Compute Manhattan distance to current location
    const distance = Math.abs(pointX - x) + Math.abs(pointY - y)

    // Update answer only on strictly smaller distance to keep first index on ties
    if (distance < smallestDistance) smallestDistance = distance, answerIndex = i
  }

  // Return index of nearest valid point, or -1 when no valid point exists
  return answerIndex
}
