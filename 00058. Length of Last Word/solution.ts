/**
 * Problem: 58. Length of Last Word
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the length of the last word in a string
 *
 * @param s - Input string
 *
 * @returns Length of the last word
 */
const lengthOfLastWord = (s: string): number => {
  // Initialize counter for word length
  let length: number = 0

  // Start from the end of the string
  let i: number = s.length - 1

  // Skip trailing spaces
  while (i >= 0 && s[i] === ' ') i--
  // Count characters of the last word
  while (i >= 0 && s[i] !== ' ') {
    // Increment length counter
    length++
    // Decrement index
    i--
  }

  return length
}
