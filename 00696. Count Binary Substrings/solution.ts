/**
 * Problem: 696. Count Binary Substrings
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts substrings with equal number of consecutive 0s and 1s
 *
 * @param s - Binary string containing only '0' and '1'
 *
 * @returns Number of valid binary substrings
 */
const countBinarySubstrings = (s: string): number => {
  // Track current consecutive group length
  let currentCount: number = 1

  // Track previous consecutive group length
  let previousCount: number = 0

  // Accumulate total valid substrings
  let totalSubstrings: number = 0

  // Iterate through string starting from second character
  for (let i: number = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      // Extend current group of identical characters
      currentCount++
    } else {
      // Group changed: add minimum of previous and current counts
      totalSubstrings += Math.min(currentCount, previousCount)

      // Move current group to previous, start new group
      previousCount = currentCount
      currentCount = 1
    }
  }

  // Add final group's contribution
  return totalSubstrings + Math.min(currentCount, previousCount)
}
