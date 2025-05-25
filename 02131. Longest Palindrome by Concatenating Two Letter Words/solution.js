/**
 * Problem: 2131. Longest Palindrome by Concatenating Two Letter Words
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

// S represents number of bits to represent a character (5 bits for lowercase a-z)
const BITS_PER_CHAR = 5,
  // M is a bitmask with 5 bits set (0x1F or 31 in decimal)
  CHAR_MASK = (1 << BITS_PER_CHAR) - 1

/**
 * Calculates maximum palindrome length using two-letter words
 *
 * @param {string[]} words - Array of two-letter words
 *
 * @returns {number} - Length of longest possible palindrome
 */
const longestPalindrome = (words) => {
  // Array to store frequency of each word encoded as a number
  const frequency = new Array(1 << (BITS_PER_CHAR << 1)).fill(0)

  // Count frequency of each word (encoded as two 5-bit numbers)
  for (const word of words)
    frequency[
      ((word.charCodeAt(0) & CHAR_MASK) << BITS_PER_CHAR) |
        (word.charCodeAt(1) & CHAR_MASK)
    ]++

  // Total length of palindrome
  let totalLength = 0,
    // Flag if we can use a word with same characters in the middle
    hasMiddleWord = 0

  // Process all possible first characters
  for (let firstChar = 1; firstChar <= 26; firstChar++) {
    // Check words with same characters (like "aa")
    const sameCharCount = frequency[(firstChar << BITS_PER_CHAR) | firstChar]

    // Add pairs to result
    totalLength += sameCharCount >> 1
    // Check if we have an odd count of same-character words for middle
    hasMiddleWord |= sameCharCount & 1

    // Process word pairs with different characters
    for (let secondChar = firstChar + 1; secondChar <= 26; secondChar++)
      totalLength += Math.min(
        frequency[(firstChar << BITS_PER_CHAR) | secondChar],
        frequency[(secondChar << BITS_PER_CHAR) | firstChar]
      )
  }

  // Calculate final length: pairs × 4 + (middle word × 2 if exists)
  return (totalLength << 2) | (hasMiddleWord << 1)
}
