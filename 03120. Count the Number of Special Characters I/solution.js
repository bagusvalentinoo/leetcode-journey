/**
 * Problem: 3120. Count the Number of Special Characters I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts characters that appear in both lowercase and uppercase
 *
 * @param {string} word - Input string
 *
 * @returns {number} Number of characters with both cases present
 */
const numberOfSpecialChars = (word) => {
  // Number of letters in the alphabet
  const ALPHABET_SIZE = 26

  // Code point for lowercase 'a' and uppercase 'A'
  const lowerA = 'a'.codePointAt(0),
    upperA = 'A'.codePointAt(0)

  // Bitmasks to track which lowercase and uppercase letters appear
  let lowerMask = 0,
    upperMask = 0

  // Iterate through each character in the input string
  for (const currentChar of word) {
    // Get Unicode code point of the current character
    const charCode = currentChar.codePointAt(0)

    // If character is lowercase a-z, set its corresponding bit in lowerMask
    if (charCode >= lowerA && charCode < lowerA + ALPHABET_SIZE)
      lowerMask |= 1 << (charCode - lowerA)
    // If character is uppercase A-Z, set its corresponding bit in upperMask
    if (charCode >= upperA && charCode < upperA + ALPHABET_SIZE)
      upperMask |= 1 << (charCode - upperA)
  }

  // Bitwise AND gives common letters that appear in both cases
  let commonMask = lowerMask & upperMask

  // Counter for number of set bits (common letters)
  let commonCount = 0

  // Count set bits using Brian Kernighan's algorithm
  while (commonMask) {
    // Clear the lowest set bit
    commonMask &= commonMask - 1
    // Increment counter
    commonCount += 1
  }

  // Return the count of characters appearing in both cases
  return commonCount
}
