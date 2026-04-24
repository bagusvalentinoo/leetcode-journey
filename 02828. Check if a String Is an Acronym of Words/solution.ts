/**
 * Problem: 2828. Check if a String Is an Acronym of Words
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if string is acronym formed by first letters of words
 *
 * @param words - Array of words
 * @param s - Target string to compare
 *
 * @returns True if s matches acronym of words
 */
const isAcronym = (words: string[], s: string): boolean => {
  // If number of words doesn't match string length, it can't be an acronym
  if (words.length !== s.length) return false

  // Compare each character of s with first letter of corresponding word
  for (let i: number = 0; i < words.length; i++) {
    // If characters don't match, return false immediately
    if (words[i][0] !== s[i]) return false
  }

  // All characters matched, valid acronym
  return true
}
