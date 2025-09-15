/**
 * Problem: 1935. Maximum Number of Words You Can Type
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns count of words in text that don't use broken letters
 *
 * @param {string} text - Sentence to check
 * @param {string} brokenLetters - Letters that can't be used
 *
 * @returns {number} - Typable word count
 */
const canBeTypedWords = (text, brokenLetters) => {
  // Initialize a counter for words containing broken letters
  let brokenWordCount = 0

  // Split the input text into an array of words
  const words = text.split(' ')

  // Create a Set for fast lookup of broken letters
  const brokenSet = new Set(brokenLetters)

  // Iterate over each word in the sentence
  for (const word of words) {
    // Check each character in the current word
    for (const char of word) {
      // If the character is a broken letter, increment the broken word count and stop checking this word
      if (brokenSet.has(char)) {
        brokenWordCount++
        break
      }
    }
  }

  // Return the number of words that can be typed (total words minus broken words)
  return words.length - brokenWordCount
}
