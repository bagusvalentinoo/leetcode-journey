/**
 * Problem: 3582. Generate Tag for Video Caption
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generates a hashtag from a caption string
 *
 * @param {string} caption - Input caption text
 *
 * @returns {string} Formatted hashtag (max 100 chars)
 */
const generateTag = (caption) => {
  // Split caption into individual words
  const words = caption.split(' ')

  // Initialize hashtag with prefix '#'
  let hashtag = '#'

  // Process each word to build camelCase hashtag
  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    // Skip empty words (consecutive spaces)
    if (words[wordIndex].length === 0) continue // 🔥 fix

    // Convert current word to lowercase
    const lowercasedWord = words[wordIndex].toLowerCase()

    // First word: add as is (lowercase)
    if (hashtag.length === 1) hashtag += lowercasedWord
    // Subsequent words: capitalize first letter
    else hashtag += lowercasedWord[0].toUpperCase() + lowercasedWord.slice(1)
  }

  // Filter to keep only alphabetic characters
  let filteredResult = '#'

  // Iterate through hashtag characters (skip the initial '#')
  for (let charIndex = 1; charIndex < hashtag.length; charIndex++) {
    const currentChar = hashtag[charIndex]

    // Keep only letters (a-z or A-Z)
    if (
      (currentChar >= 'a' && currentChar <= 'z') ||
      (currentChar >= 'A' && currentChar <= 'Z')
    )
      filteredResult += currentChar
  }

  // Return hashtag truncated to 100 characters
  return filteredResult.slice(0, 100)
}
