/**
 * Problem: 3330. Find the Original Typed String I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 28 ms (Beats 100%)
 */

/**
 * Calculates the number of possible strings by removing consecutive duplicate characters
 *
 * @param {string} word - Input string with consecutive identical characters
 *
 * @returns {number} - Number of possible strings
 */
const possibleStringCount = (word) =>
  word.match(/(.)\1*/g).reduce((sum, group) => sum + group.length - 1, 1)
