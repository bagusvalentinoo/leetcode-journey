/**
 * Problem: 3582. Generate Tag for Video Caption
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generates a hashtag from a caption string
 *
 * @param caption - Input caption text
 *
 * @returns Formatted hashtag (max 100 chars)
 */
const generateTag = (caption: string): string => {
  // Split caption into individual words
  const words: string[] = caption.split(' ')

  // Initialize hashtag with prefix '#'
  let hashtag: string = '#'

  // Process each word to build camelCase hashtag
  for (let wordIndex: number = 0; wordIndex < words.length; wordIndex++) {
    // Skip empty words (consecutive spaces)
    if (words[wordIndex].length === 0) continue // 🔥 fix

    // Convert current word to lowercase
    const lowercasedWord: string = words[wordIndex].toLowerCase()

    // First word: add as is (lowercase)
    if (hashtag.length === 1) hashtag += lowercasedWord
    // Subsequent words: capitalize first letter
    else hashtag += lowercasedWord[0].toUpperCase() + lowercasedWord.slice(1)
  }

  // Filter to keep only alphabetic characters
  let filteredResult: string = '#'

  // Iterate through hashtag characters (skip the initial '#')
  for (let charIndex: number = 1; charIndex < hashtag.length; charIndex++) {
    const currentChar: string = hashtag[charIndex]

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
