/**
 * Problem: 2085. Count Common Words With One Occurrence
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count words that appear exactly once in both arrays
 *
 * @param {string[]} words1 - First array of words
 * @param {string[]} words2 - Second array of words
 *
 * @returns {number} Number of common words with one occurrence
 */
const countWords = (words1, words2) => {
  // Store the occurrence count for each word in the first array
  const frequencies1 = new Map()

  // Count each word in the first array
  for (const word of words1) {
    frequencies1.has(word)
      ? frequencies1.set(word, frequencies1.get(word) + 1)
      : frequencies1.set(word, 1)
  }

  // Store the occurrence count for each word in the second array
  const frequencies2 = new Map()

  // Count each word in the second array
  for (const word of words2) {
    frequencies2.has(word)
      ? frequencies2.set(word, frequencies2.get(word) + 1)
      : frequencies2.set(word, 1)
  }

  // Track words that occur exactly once in both arrays
  let commonWordCount = 0

  // Check each distinct word from the first array
  for (const [word, wordCount] of frequencies1) {
    // Count words that appear exactly once in the second array
    if (
      frequencies2.has(word) &&
      wordCount === 1 &&
      frequencies2.get(word) === 1
    )
      commonWordCount++
  }

  // Return the number of qualifying common words
  return commonWordCount
}
