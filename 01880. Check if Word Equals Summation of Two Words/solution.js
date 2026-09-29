/**
 * Problem: 1880. Check if Word Equals Summation of Two Words
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if numerical values of first two words sum to third word value
 *
 * @param {string} firstWord - First word of lowercase letters 'a' to 'j'
 * @param {string} secondWord - Second word of lowercase letters 'a' to 'j'
 * @param {string} targetWord - Target word of lowercase letters 'a' to 'j'
 *
 * @returns {boolean} True if first value plus second value equals target value
 */
const isSumEqual = (firstWord, secondWord, targetWord) => {
  // Helper function to convert word to numerical value
  const getValue = (word) => {
    // Initialize accumulated number
    let num = 0

    // Process each character in the word
    for (const ch of word) {
      // Shift digits left and append letter value (a -> 0, b -> 1, ...)
      num = num * 10 + (ch.charCodeAt(0) - 97)
    }

    // Return the numerical value of the word
    return num
  }

  // Convert words to numerical values
  const first = getValue(firstWord),
    second = getValue(secondWord),
    target = getValue(targetWord)

  // Return true if summation of first two values equals target value
  return first + second === target
}
