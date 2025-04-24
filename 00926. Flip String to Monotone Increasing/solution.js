/**
 * Problem: 926. Flip String to Monotone Increasing
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Minimum flips to make a binary string monotone increasing
 *
 * @param {string} s - Input binary string
 *
 * @returns {number} - Minimum flips required
 */
const minFlipsMonoIncr = (s) => {
  // Number of 1s to the left of current position
  let ones = 0
  // Number of flips required
  let flips = 0

  // Iterate through the string
  for (let i = 0; i < s.length; i++)
    // If current character is 1
    if (s[i] === '1') ones++
    // If current character is 0
    else flips = Math.min(ones, flips + 1)

  // Return minimum flips required
  return flips
}
