/**
 * Problem: 1401. Circle and Rectangle Overlapping
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a circle overlaps with a rectangle
 *
 * @param {number} radius - Circle radius
 * @param {number} xCenter - Circle center x-coordinate
 * @param {number} yCenter - Circle center y-coordinate
 * @param {number} x1 - Rectangle left x-coordinate
 * @param {number} y1 - Rectangle bottom y-coordinate
 * @param {number} x2 - Rectangle right x-coordinate
 * @param {number} y2 - Rectangle top y-coordinate
 *
 * @returns {boolean} True if circle overlaps with rectangle
 */
const checkOverlap = (radius, xCenter, yCenter, x1, y1, x2, y2) => {
  // Find the closest point on rectangle to circle center
  // Clamp circle center coordinates to rectangle boundaries
  const closestRectX = Math.max(x1, Math.min(xCenter, x2)),
    closestRectY = Math.max(y1, Math.min(yCenter, y2))

  // Calculate distance from circle center to the closest rectangle point
  const distanceToClosestPoint = Math.sqrt(
    (xCenter - closestRectX) ** 2 + (yCenter - closestRectY) ** 2
  )

  // Overlap occurs if distance is less than or equal to radius
  return distanceToClosestPoint <= radius
}
