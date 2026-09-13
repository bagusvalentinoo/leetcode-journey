/**
 * Problem: 1662. Check If Two String Arrays are Equivalent
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if two string arrays represent the same string
 *
 * @param word1 - First array of string parts
 * @param word2 - Second array of string parts
 *
 * @returns True if concatenated strings are equal
 */
const arrayStringsAreEqual = (word1: string[], word2: string[]): boolean =>
  // Concatenate all parts of each array in order and compare the resulting strings
  word1.join('') === word2.join('')
