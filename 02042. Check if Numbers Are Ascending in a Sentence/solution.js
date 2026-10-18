/**
 * Problem: 2042. Check if Numbers Are Ascending in a Sentence
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether numbers in a sentence are strictly increasing
 *
 * @param {string} s - Sentence containing words and positive numbers
 *
 * @returns {boolean} Whether all numbers are strictly increasing
 */
const areNumbersAscending = (s) => {
  // Track the most recent number in the sentence
  let previousNumber = 0

  // Examine every space-separated token in order
  for (const token of s.split(' ')) {
    // Skip words because only number tokens affect the ordering
    if (token[0] < '0' || token[0] > '9') continue

    // Convert the numeric token to a number for comparison
    const currentNumber = Number(token)

    // Reject a number that is not greater than its predecessor
    if (currentNumber <= previousNumber) return false

    // Store the current number for the next comparison
    previousNumber = currentNumber
  }

  // All numbers appeared in strictly increasing order
  return true
}
