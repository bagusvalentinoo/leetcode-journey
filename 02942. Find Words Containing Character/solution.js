/**
 * Problem: 2942. Find Words Containing Character
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find indices of words containing a specific character
 *
 * @param {string[]} words - Array of words
 * @param {string} x - Character to search for
 *
 * @returns {number[]} - Indices of matching words
 */
const findWordsContaining = (words, x) => {
  // Initialize an empty array to store indices of words containing the target character
  const matchingIndices = []

  // Iterate through each word in the array
  for (let i = 0; i < words.length; i++)
    // If the current word contains the target character, add its index to the result
    if (words[i].includes(x)) matchingIndices.push(i)

  // Return the array of matching indices
  return matchingIndices
}
