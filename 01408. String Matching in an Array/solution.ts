/**
 * Problem: 1408. String Matching in an Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds all strings that are substrings of another string in the array
 *
 * @param words - Array of strings
 *
 * @returns Strings that are substrings of any other string
 */
const stringMatching = (words: string[]): string[] => {
  // Array to store strings that are substrings of another word
  const substringsFound: string[] = []

  // Compare each word with every other word in the array
  for (let i: number = 0; i < words.length; i++) {
    for (let j: number = 0; j < words.length; j++) {
      // Skip comparing a word with itself
      if (i !== j && words[j].includes(words[i])) {
        // Current word is a substring of another word
        substringsFound.push(words[i])

        // No need to check further for this word
        break
      }
    }
  }

  // Return the array of substrings found
  return substringsFound
}
