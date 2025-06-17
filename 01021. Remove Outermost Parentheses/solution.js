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
 * @returns {string} - String with outermost parentheses removed
 */
const removeOuterParentheses = (s) => {
  // Track nesting depth of parentheses
  let depth = 0
  // Store characters that are not outermost parentheses
  const result = []

  // Iterate through string, only keeping parentheses that aren't at depth 0 (outermost)
  for (const char of s) {
    if (char === '(' && depth++) result.push(char)
    if (char === ')' && --depth) result.push(char)
  }

  return result.join('')
}
