/**
 * Problem: 1401. Circle and Rectangle Overlapping
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a circle overlaps with a rectangle
 *
 * @param radius - Circle radius
 * @param xCenter - Circle center x-coordinate
 * @param yCenter - Circle center y-coordinate
 * @param x1 - Rectangle left x-coordinate
 * @param y1 - Rectangle bottom y-coordinate
 * @param x2 - Rectangle right x-coordinate
 * @param y2 - Rectangle top y-coordinate
 *
 * @returns True if circle overlaps with rectangle
 */
const checkOverlap = (
  radius: number,
  xCenter: number,
  yCenter: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean => {
  // Find the closest point on rectangle to circle center
  // Clamp circle center coordinates to rectangle boundaries
  const closestRectX: number = Math.max(x1, Math.min(xCenter, x2)),
    closestRectY: number = Math.max(y1, Math.min(yCenter, y2))

  // Calculate distance from circle center to the closest rectangle point
  const distanceToClosestPoint: number = Math.sqrt(
    (xCenter - closestRectX) ** 2 + (yCenter - closestRectY) ** 2
  )

  // Overlap occurs if distance is less than or equal to radius
  return distanceToClosestPoint <= radius
}
