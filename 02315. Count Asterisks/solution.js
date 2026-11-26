/**
 * Problem: 2315. Count Asterisks
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count asterisks outside pairs of vertical bars
 *
 * @param {string} s - Input string
 *
 * @returns {number} Number of asterisks outside bar pairs
 */
const countAsterisks = (s) => {
  // Track whether the current character is inside a pair of vertical bars
  let isInsideBars = false
  // Store the number of asterisks outside bar pairs
  let count = 0

  // Process each character in the string
  for (const character of s) {
    // Toggle the bar-pair state when reaching a vertical bar
    if (character === '|') isInsideBars = !isInsideBars
    // Count asterisks only when they are outside a bar pair
    if (character === '*' && !isInsideBars) count++
  }

  // Return the number of valid asterisks
  return count
}
