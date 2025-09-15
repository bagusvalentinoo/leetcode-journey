/**
 * Problem: 1232. Check If It Is a Straight Line
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all points lie on a straight line
 *
 * @param {number[][]} coordinates - Array of [x, y] points
 *
 * @returns {boolean} - True if points are collinear
 */
const checkStraightLine = (coordinates) => {
  // Get the number of points in the coordinates array
  const numPoints = coordinates.length

  // If there are 2 or fewer points, they are always collinear
  if (numPoints <= 2) return true

  // Iterate through each set of three consecutive points
  for (let i = 0; i < numPoints - 2; i++) {
    // Destructure the coordinates for the first point
    const [x1, y1] = coordinates[i]
    // Destructure the coordinates for the second point
    const [x2, y2] = coordinates[i + 1]
    // Destructure the coordinates for the third point
    const [x3, y3] = coordinates[i + 2]

    // Check if the three points are collinear using the cross product
    // If not collinear, return false immediately
    if ((y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1)) return false
  }

  // If all points are collinear, return true
  return true
}
