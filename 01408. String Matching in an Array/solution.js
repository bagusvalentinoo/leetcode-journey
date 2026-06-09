/**
 * Problem: 1408. String Matching in an Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds all strings that are substrings of another string in the array
 *
 * @param {string[]} words - Array of strings
 *
 * @returns {string[]} Strings that are substrings of any other string
 */
const stringMatching = (words) => {
  // Array to store strings that are substrings of another word
  const substringsFound = []

  // Compare each word with every other word in the array
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
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
