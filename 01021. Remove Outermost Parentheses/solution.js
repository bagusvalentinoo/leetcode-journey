/**
 * Problem: 1021. Remove Outermost Parentheses
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes outermost parentheses from each primitive string
 *
 * @param {string} s - Valid parentheses string
 *
 * @returns {string} String with outermost parentheses removed
 */
const removeOuterParentheses = (s) => {
  // Track current nesting level
  let nestingLevel = 0

  // Store result string
  let result = ''

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If current character is an opening parenthesis
    if (s[i] === '(') {
      // Increment nesting level
      ++nestingLevel

      // Add to result if not the outermost parenthesis (level > 1)
      if (nestingLevel > 1) result = result + s[i]
    }
    // If current character is a closing parenthesis
    else {
      // Add to result if not closing the outermost parenthesis (level > 1)
      if (nestingLevel > 1) result = result + s[i]

      // Decrement nesting level
      --nestingLevel
    }
  }

  // Return the resulting string with outermost parentheses removed
  return result
}
