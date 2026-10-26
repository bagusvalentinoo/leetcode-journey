/**
 * Problem: 2124. Check if All A's Appears Before All B's
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks whether all 'a' characters appear before all 'b' characters
 *
 * @param {string} s - String containing only 'a' and 'b' characters
 *
 * @returns {boolean} True when no 'b' appears before an 'a'
 */
const checkString = (s) => !s.includes('ba')
