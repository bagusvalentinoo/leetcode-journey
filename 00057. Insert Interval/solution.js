/**
 * Problem: 57. Insert Interval
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Inserts a new interval into a list of non-overlapping intervals
 *
 * @param {number[][]} intervals - Sorted non-overlapping intervals
 * @param {number[]} newInterval - New interval to insert [start, end]
 *
 * @returns {number[][]} Merged intervals after insertion
 */
const insert = (intervals, newInterval) => {
  // Store result intervals
  const mergedIntervals = []

  // Destructure new interval into start and end values
  let [start, end] = newInterval

  // Initialize pointer for iteration
  let index = 0

  // Get total number of intervals
  const totalIntervals = intervals.length

  // Add all intervals that end before the new interval starts
  while (index < totalIntervals && intervals[index][1] < start) {
    // Push interval that doesn't overlap
    mergedIntervals.push(intervals[index])

    // Move to next interval
    index++
  }

  // Merge all intervals that overlap with the new interval
  while (index < totalIntervals && intervals[index][0] <= end) {
    // Update start to the minimum value among overlapping intervals
    start = Math.min(start, intervals[index][0])
    // Update end to the maximum value among overlapping intervals
    end = Math.max(end, intervals[index][1])

    // Move to next interval
    index++
  }

  // Add the merged interval
  mergedIntervals.push([start, end])

  // Add all remaining intervals that start after the merged interval ends
  while (index < totalIntervals) {
    // Push remaining interval
    mergedIntervals.push(intervals[index])

    // Move to next interval
    index++
  }

  // Return the final merged intervals array
  return mergedIntervals
}
