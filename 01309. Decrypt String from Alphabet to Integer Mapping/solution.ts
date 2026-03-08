/**
 * Problem: 1309. Decrypt String from Alphabet to Integer Mapping
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Decodes a string from "10#" to "z" format
 *
 * @param s - Encoded string with numbers and #
 *
 * @returns Decoded string
 */
const freqAlphabets = (s: string): string =>
  s.replace(
    // Match either two digits followed by #, or single digit
    /(\d\d#|\d)/g,
    // Replace each match with corresponding letter
    (token: string): string => {
      // Extract the number part (without # if present)
      const num: string = token.length === 3 ? token.slice(0, 2) : token

      // Convert to number and get corresponding letter (a=1, b=2, etc.)
      return String.fromCharCode(96 + parseInt(num, 10))
    }
  )
