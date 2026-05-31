/**
 * Problem: 1370. Increasing Decreasing String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sorts string in increasing-decreasing alternating pattern
 *
 * @param {string} s - Input string
 *
 * @returns {string} Sorted string in alternating order
 */
const sortString = (s) => {
  // Frequency array for 26 lowercase letters (a-z)
  const frequency = new Array(26).fill(0)

  // Count frequency of each character in the input string
  for (const character of s) frequency[character.charCodeAt(0) - 97]++

  // String to build the result (empty initially)
  let result = ''

  // Continue until all characters have been used
  while (result.length < s.length) {
    // Forward pass: pick smallest available character (increasing order)
    for (let i = 0; i < 26; i++) {
      // If this character still has remaining count
      if (frequency[i] > 0) {
        // Append character to result string
        result += String.fromCharCode(i + 97)
        // Decrease its frequency by 1
        frequency[i]--
      }
    }

    // Backward pass: pick largest available character (decreasing order)
    for (let i = 25; i >= 0; i--) {
      // If this character still has remaining count
      if (frequency[i] > 0) {
        // Append character to result string
        result += String.fromCharCode(i + 97)
        // Decrease its frequency by 1
        frequency[i]--
      }
    }
  }

  // Return the final sorted string
  return result
}
