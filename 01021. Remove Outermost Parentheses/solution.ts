/**
 * Problem: 1021. Remove Outermost Parentheses
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes outermost parentheses from each primitive string
 *
 * @param s - Valid parentheses string
 *
 * @returns String with outermost parentheses removed
 */
const removeOuterParentheses = (s: string): string => {
  // Track current nesting level
  let nestingLevel: number = 0

  // Store result string
  let result: string = ''

  // Iterate through each character in the string
  for (let i: number = 0; i < s.length; i++) {
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
