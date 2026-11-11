/**
 * Problem: 2351. First Letter to Appear Twice
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the first character whose second occurrence is encountered
 *
 * @param {string} s - Lowercase English letter string
 *
 * @returns {string} First character to appear twice
 */
const repeatedCharacter = (s) => {
  // Track characters encountered while scanning from left to right
  const seen = new Set()

  // Return immediately when a character has already been seen
  for (const character of s) {
    if (seen.has(character)) return character

    // Record the character's first occurrence
    seen.add(character)
  }
}
