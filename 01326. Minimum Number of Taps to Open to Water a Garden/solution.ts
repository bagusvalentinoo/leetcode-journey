/**
 * Problem: 1326. Minimum Number of Taps to Open to Water a Garden
 *
 * Difficulty: Hard
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Minimum number of taps to water the garden
 *
 * @param n - Length of garden
 * @param ranges - Coverage range of each tap
 *
 * @returns Minimum number of taps needed
 */
const minTaps = (n: number, ranges: number[]): number => {
  // Array to store farthest reach from each starting point
  const reachFromStart: number[] = new Array(n + 1).fill(0)

  // Build reach array: for each tap, update farthest reach from its leftmost coverage
  for (let i: number = 0; i <= n; i++) {
    // Calculate left and right coverage boundaries for current tap
    const left: number = Math.max(0, i - ranges[i]),
      right: number = Math.min(n, i + ranges[i])

    // Store the maximum right coverage starting from left position
    reachFromStart[left] = Math.max(reachFromStart[left], right)
  }

  // Greedy interval covering variables
  let tapsCount: number = 0,
    currentEnd: number = 0,
    farthestReach: number = 0

  // Iterate through each position from 0 to n
  for (let i: number = 0; i <= n; i++) {
    // If current position exceeds farthest reach, impossible
    if (i > farthestReach) return -1

    // Update farthest reach from current position
    farthestReach = Math.max(farthestReach, reachFromStart[i])

    // When we reach the end of current coverage segment
    if (i === currentEnd) {
      // If not at the end of garden yet
      if (i !== n) {
        // Select a new tap and extend coverage
        tapsCount++
        currentEnd = farthestReach
      }
    }
  }

  // Return the minimum number of taps needed
  return tapsCount
}
