/**
 * Problem: 757. Set Intersection Size At Least Two
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/**
 * Find the minimum size of a set covering all intervals
 *
 * @param {number[][]} intervals - List of intervals
 *
 * @returns {number} - Minimum set size
 */
const intersectionSizeTwo = (intervals) => {
  // Sort intervals by their end points in ascending order.
  // If two intervals have the same end point, sort by start point in descending order.
  intervals.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]))

  // Initialize the result variable to store the minimum set size.
  let result = 0

  // Initialize the last array to keep track of the last two points in the set.
  let last = []

  // Iterate through each interval in the sorted intervals.
  intervals.forEach((interval) => {
    // Destructure the start and end points of the current interval.
    const [start, end] = interval

    // Check if the last array is empty or the second point in last is less than the start.
    if (last.length === 0 || last[1] < start) {
      // Add two points to the result as the interval is not covered.
      result += 2
      // Update the last array with the two largest points in the interval.
      last = [end - 1, end]
    }
    // Check if the first point in last is less than the start.
    else if (last[0] < start) {
      // Add one point to the result as only one more point is needed.
      result += 1
      // Update the last array to include the second point in last and the end point.
      last = [last[1], end]
    }
  })

  // Return the result as the minimum set size.
  return result
}
