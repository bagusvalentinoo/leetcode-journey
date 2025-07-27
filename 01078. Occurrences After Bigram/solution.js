/**
 * Problem: 1078. Occurrences After Bigram
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns words following consecutive 'first' and 'second' in text
 *
 * @param {string} text - Input text
 * @param {string} first - First word to match
 * @param {string} second - Second word to match
 *
 * @returns {string[]} - Words after the matched pair
 */
const findOcurrences = (text, first, second) => {
  // Split the input text into an array of words
  const words = text.split(' ')

  // Initialize an array to store the result words
  const result = []

  // Iterate through the words array starting from the third word
  for (let i = 2; i < words.length; i++)
    // Check if the previous two words match 'first' and 'second'
    if (words[i - 2] === first && words[i - 1] === second)
      // If matched, add the current word to the result array
      result.push(words[i])

  // Return the array of words found after the matched pair
  return result
}
