/**
 * Problem: 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds first word in sentence that starts with given search word
 *
 * @param sentence - Space-separated sentence
 * @param searchWord - Word to search as prefix
 *
 * @returns 1-indexed position or -1 if not found
 */
const isPrefixOfWord = (sentence: string, searchWord: string): number => {
  // Split sentence into individual words
  const words: string[] = sentence.split(' ')

  // Check each word to see if it starts with searchWord
  for (let i: number = 0; i < words.length; i++) {
    // If word has the prefix, return 1-indexed position
    if (words[i].startsWith(searchWord)) return i + 1
  }

  // No word starts with searchWord
  return -1
}
