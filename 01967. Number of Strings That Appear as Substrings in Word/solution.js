/**
 * Problem: 1967. Number of Strings That Appear as Substrings in Word
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts how many patterns are substrings of the given word
 *
 * @param {string[]} patterns - Array of pattern strings to check
 * @param {string} word - The word to search patterns in
 *
 * @returns {number} Number of patterns that appear in the word
 */
const numOfStrings = (patterns, word) => {
  // Counter for patterns found in word
  let matchCount = 0

  // Check each pattern against the word
  for (const currentPattern of patterns) {
    // If pattern is found in word, increment counter
    if (word.includes(currentPattern)) matchCount++
  }

  // Return the total number of patterns found in the word
  return matchCount
}
