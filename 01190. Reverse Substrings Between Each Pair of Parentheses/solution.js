/**
 * Problem: 1190. Reverse Substrings Between Each Pair of Parentheses
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses substrings within parentheses
 *
 * @param {string} s - Input string
 *
 * @returns {string} - Resulting string
 */
const reverseParentheses = (s) => {
  // Stack to keep track of indices of opening parentheses
  const openParenIndices = []
  // Array to build the resulting string character by character
  const resultChars = []

  // Iterate through each character in the input string
  for (const currentChar of s) {
    // If the character is an opening parenthesis, store the current position
    if (currentChar === '(') openParenIndices.push(resultChars.length)
    // If the character is a closing parenthesis, reverse the substring within the parentheses
    else if (currentChar === ')') {
      // Get the index of the matching opening parenthesis
      const startIndex = openParenIndices.pop()
      // Extract and reverse the substring between the parentheses
      const substringToReverse = resultChars.slice(startIndex).reverse()

      // Replace the original substring with its reversed version
      resultChars.splice(
        startIndex,
        substringToReverse.length,
        ...substringToReverse
      )
    }
    // If the character is not a parenthesis, add it to the result
    else resultChars.push(currentChar)
  }

  // Join the array of characters to form the final string
  return resultChars.join('')
}
