/**
 * Problem: 2351. First Letter to Appear Twice
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the first character whose second occurrence is encountered
 *
 * @param s - Lowercase English letter string
 *
 * @returns First character to appear twice
 */
const repeatedCharacter = (s: string): string => {
  // Track characters encountered while scanning from left to right
  const seen: Set<string> = new Set()

  // Return immediately when a character has already been seen
  for (const character of s) {
    if (seen.has(character)) return character

    // Record the character's first occurrence
    seen.add(character)
  }

  // The constraints guarantee that a repeated character exists
  return ''
}
