/**
 * Problem: 1024. Video Stitching
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum clips to cover time interval [0, time]
 *
 * @param {number[][]} clips - Array of [start, end] clips
 * @param {number} time - Target time to cover
 *
 * @returns {number} - Minimum clips needed or -1 if impossible
 */
const videoStitching = (clips, time) => {
  // Sort clips by start time, then by end time (descending) for same start
  clips.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]

    return a[0] - b[0]
  })

  // Return -1 if first clip doesn't start at time 0
  if (clips[0][0] !== 0) return -1

  // Track current coverage end, clips used, and next possible end
  let currentEnd = 0,
    clipsUsed = 0,
    nextPossibleEnd = 0
  let index = 0

  // Process clips while they can extend current coverage
  while (index < clips.length && clips[index][0] <= currentEnd) {
    // Find the clip that extends coverage the furthest
    while (index < clips.length && clips[index][0] <= currentEnd) {
      nextPossibleEnd = Math.max(nextPossibleEnd, clips[index][1])
      index++
    }

    // Use the best clip found
    clipsUsed++
    currentEnd = nextPossibleEnd

    // Check if we've covered the required time
    if (currentEnd >= time) return clipsUsed
  }

  // Return -1 if we can't cover the entire time
  return -1
}
