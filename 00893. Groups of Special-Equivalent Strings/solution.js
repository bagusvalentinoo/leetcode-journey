/**
 * Problem: 893. Groups of Special-Equivalent Strings
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Returns the number of special equivalent groups.
 *
 * @param {string[]} words - Array of words
 *
 * @returns {number} - Number of special equivalent groups
 */
const numSpecialEquivGroups = (words) => {
  // Store unique sorted words
  const sortedWords = new Set()

  // Helper function to sort words
  const sortHelper = (word) => {
    // Even and odd characters
    const even = []
    const odd = []

    // Sort even and odd characters
    for (let i = 0; i < word.length; i++)
      // Push even characters
      if (i % 2 === 0) even.push(word[i])
      // Push odd characters
      else odd.push(word[i])

    // Sort even and odd characters
    even.sort()
    odd.sort()

    // Return sorted even and odd characters
    return even.join('') + odd.join('')
  }

  // Add sorted words to set
  for (const word of words) sortedWords.add(sortHelper(word))

  // Return number of unique sorted words
  return sortedWords.size
}
