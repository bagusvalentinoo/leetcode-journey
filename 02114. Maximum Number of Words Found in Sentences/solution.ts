/**
 * Problem: 2114. Maximum Number of Words Found in Sentences
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the largest word count among all sentences
 *
 * @param sentences - Sentences to evaluate
 *
 * @returns Maximum number of words in one sentence
 */
const mostWordsFound = (sentences: string[]): number => {
  // Track the largest word count found
  let maximumWords: number = 0

  // Count words in each sentence
  for (const sentence of sentences) {
    // A sentence has one more word than spaces
    let wordCount: number = 1

    // Count each space separating words
    for (const character of sentence) if (character === ' ') wordCount++

    // Update the largest word count
    maximumWords = Math.max(maximumWords, wordCount)
  }

  // Return the largest word count
  return maximumWords
}
