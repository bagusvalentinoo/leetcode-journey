/**
 * Problem: 1779. Find Nearest Point That Has the Same X or Y Coordinate
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find index of valid point with smallest Manhattan distance
 *
 * @param x - Current x-coordinate
 * @param y - Current y-coordinate
 * @param points - Array of [ai, bi] points
 *
 * @returns Index of nearest valid point, or -1 if none exists
 */
const nearestValidPoint = (
  x: number,
  y: number,
  points: number[][]
): number => {
  // Track smallest distance found and its index, default to no valid point
  let smallestDistance: number = Infinity,
    answerIndex: number = -1

  // Scan each point in order to keep smallest index on ties
  for (let i = 0; i < points.length; i++) {
    // Read coordinates of current point
    const pointX: number = points[i][0],
      pointY: number = points[i][1]

    // Skip points sharing neither x nor y with current location
    if (pointX !== x && pointY !== y) continue

    // Compute Manhattan distance to current location
    const distance: number = Math.abs(pointX - x) + Math.abs(pointY - y)

    // Update answer only on strictly smaller distance to keep first index on ties
    if (distance < smallestDistance)
      ((smallestDistance = distance), (answerIndex = i))
  }

  // Return index of nearest valid point, or -1 when no valid point exists
  return answerIndex
}
