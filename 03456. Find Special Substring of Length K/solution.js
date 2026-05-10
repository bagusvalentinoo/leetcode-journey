/**
 * Problem: 3456. Find Special Substring of Length K
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if there's a substring of length k with all identical characters
 *
 * @param {string} s - Input string
 * @param {number} k - Length of substring to check
 *
 * @returns {boolean} True if such substring exists
 */
const hasSpecialSubstring = (s, k) =>
  // Split string into groups of consecutive identical characters
  s
    .match(/(.)(\1*)/g)
    // Check if any group has length exactly k
    .some((group) => group.length === k)
