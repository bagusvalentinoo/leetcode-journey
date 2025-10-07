/**
 * Problem: 1266. Minimum Time Visiting All Points
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum time to visit all points in order
 *
 * @param {number[][]} points - Array of [x, y] coordinates
 *
 * @returns {number} - Minimum time required
 */
const minTimeToVisitAllPoints = (points) => {
  // Initialize total time to zero before starting calculation
  let time = 0

  // Iterate through each consecutive pair of points to calculate time between them
  for (let i = 1; i < points.length; i++)
    // Add the time to move from previous point to current point using toTime function
    time += toTime(points[i - 1], points[i])

  // Return the accumulated minimum time to visit all points in order
  return time
}

/**
 * Gets time to move from one point to another
 *
 * @param {number[]} from - Starting [x, y]
 * @param {number[]} to - Ending [x, y]
 *
 * @returns {number} - Time to move
 */
const toTime = (from, to) => {
  // Calculate the absolute difference between x-coordinates, y-coordinates of the two points
  const xDiff = Math.abs(from[0] - to[0]),
    yDiff = Math.abs(from[1] - to[1])

  // Return the maximum of xDiff and yDiff, representing the minimum time to move between points
  return Math.max(xDiff, yDiff)
}
