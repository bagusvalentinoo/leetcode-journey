/**
 * Problem: 2434. Using a Robot to Print the Lexicographically Smallest String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 65 ms (Beats 100%)
 */

/**
 * Returns the lexicographically smallest string by using stack operations
 *
 * @param {string} s - Input string
 *
 * @returns {string} - Lexicographically smallest result
 */
const robotWithString = (s) => {
  // Track frequency of each lowercase letter (a-z)
  const charFrequency = Array(26).fill(0)

  // Count occurrences of each character
  for (const char of s) charFrequency[char.charCodeAt(0) - 97]++

  // Stack to hold characters temporarily
  const stack = []
  // Track the smallest remaining character
  let smallestRemaining = 0
  // Final string to return
  let result = ''

  for (const char of s) {
    stack.push(char)
    charFrequency[char.charCodeAt(0) - 97]--

    // Update smallest remaining character index
    while (smallestRemaining < 26 && charFrequency[smallestRemaining] === 0)
      smallestRemaining++

    // Pop characters from stack when optimal
    while (
      stack.length &&
      (smallestRemaining === 26 ||
        stack[stack.length - 1].charCodeAt(0) - 97 <= smallestRemaining)
    )
      result += stack.pop()
  }

  // Empty remaining characters from stack
  while (stack.length) result += stack.pop()

  return result
}
