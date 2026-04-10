/**
 * Problem: 57. Insert Interval
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Inserts a new interval into a list of non-overlapping intervals
 *
 * @param intervals - Sorted non-overlapping intervals
 * @param newInterval - New interval to insert [start, end]
 *
 * @returns Merged intervals after insertion
 */
const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  // Initialize result array
  let result: number[][] = []

  // Extract start and end from new interval
  let start: number = newInterval[0],
    end: number = newInterval[1]

  // Track if merged interval has been pushed
  let isMergedPushed: boolean = false

  // Iterate through all intervals
  for (let i: number = 0; i < intervals.length; i++) {
    // Case 1: Current interval ends before new interval starts
    if (intervals[i][1] < newInterval[0]) result.push(intervals[i])
    // Case 2: Current interval starts after new interval ends
    else if (intervals[i][0] > newInterval[1]) {
      // Push merged interval if not already pushed
      if (!isMergedPushed) {
        result.push([start, end])
        isMergedPushed = true
      }

      // Push current interval
      result.push(intervals[i])
    }
    // Case 3: Overlapping interval, merge
    else {
      start = Math.min(intervals[i][0], start)
      end = Math.max(intervals[i][1], end)
    }
  }

  // If merged interval hasn't been pushed yet, push it
  if (!isMergedPushed) result.push([start, end])

  return result
}
