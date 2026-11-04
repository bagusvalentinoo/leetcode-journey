/**
 * Problem: 2309. Greatest English Letter in Upper and Lower Case
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds greatest uppercase letter appearing in both lowercase and uppercase
 *
 * @param s - Input string of English letters
 *
 * @returns Greatest English letter in uppercase, or empty string
 */
const greatestLetter = (s: string): string => {
  // Check uppercase letters in reverse alphabetical order from 'Z' down to 'A'
  for (let i = 25; i >= 0; i -= 1) {
    // Current uppercase letter
    const upper = String.fromCharCode(65 + i)
    // Corresponding lowercase letter
    const lower = String.fromCharCode(97 + i)

    // Check if both uppercase and lowercase forms exist in the string
    if (s.includes(upper) && s.includes(lower)) return upper
  }

  // Return empty string if no qualifying letter exists
  return ''
}
