/**
 * Problem: 696. Count Binary Substrings
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Counts substrings with equal number of consecutive 0s and 1s
 *
 * @param {string} s - Binary string containing only '0' and '1'
 *
 * @return {number} Number of valid binary substrings
 */
const countBinarySubstrings = (s) => {
  // Initialize counters
  let prevGroupCount = 0 // Count of previous consecutive same bits
  let currGroupCount = 1 // Count of current consecutive same bits
  let result = 0 // Result counter

  // Iterate through string starting from second character
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      // Same bit as previous, increment current group
      currGroupCount++
    } else {
      // Different bit, move current group to previous and reset current
      prevGroupCount = currGroupCount
      currGroupCount = 1
    }

    // If previous group count is at least current group count
    // we can form a valid substring
    if (prevGroupCount >= currGroupCount) result++
  }

  return result
}
