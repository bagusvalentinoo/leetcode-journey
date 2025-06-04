/**
 * Problem: 3403. Find the Lexicographically Largest String From the Box I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Finds the lexicographically largest substring of a given word
 *
 * @param {string} word - Input string
 *
 * @returns {string} - Lexicographically largest substring
 */
const lastSubstring = (word) => {
  // Pointers to compare substrings
  let startIndex = 0,
    compareIndex = 1
  const strLength = word.length

  while (compareIndex < strLength) {
    // Check matching characters
    let matchLength = 0

    while (
      compareIndex + matchLength < strLength &&
      word[startIndex + matchLength] === word[compareIndex + matchLength]
    )
      matchLength++

    if (
      compareIndex + matchLength < strLength &&
      word[startIndex + matchLength] < word[compareIndex + matchLength]
    ) {
      // Found better substring, update pointers
      const oldStart = startIndex

      startIndex = compareIndex
      compareIndex = Math.max(compareIndex + 1, oldStart + matchLength + 1)
    } else {
      // Skip current match
      compareIndex = compareIndex + matchLength + 1
    }
  }

  return word.substring(startIndex, strLength)
}

/**
 * Finds the lexicographically largest substring when word is split among friends
 *
 * @param {string} word - Input string
 * @param {number} numFriends - Number of splits
 *
 * @returns {string} - Lexicographically largest string
 */
const answerString = (word, numFriends) => {
  // Return whole word if only one friend
  if (numFriends === 1) return word

  // Find lexicographically largest substring
  const largestSubstring = lastSubstring(word)
  const wordLength = word.length,
    substringLength = largestSubstring.length

  // Return substring with appropriate length
  return largestSubstring.substring(
    0,
    Math.min(substringLength, wordLength - numFriends + 1)
  )
}
