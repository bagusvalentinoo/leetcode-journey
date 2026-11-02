/**
 * Problem: 2278. Percentage of Letter in String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the percentage of characters in a string that match a given letter
 *
 * @param {string} s - Input string
 * @param {character} letter - Target character to count
 *
 * @returns {number} Percentage rounded down to nearest whole percent
 */
const percentageLetter = (s, letter) => {
  // Count matching occurrences of the target letter
  let count = 0

  // Iterate through characters of the string
  for (let i = 0; i < s.length; i++) {
    // Increment counter if current character equals target letter
    if (s[i] === letter) count++
  }

  // Calculate percentage and round down to nearest integer
  return Math.floor((count * 100) / s.length)
}
