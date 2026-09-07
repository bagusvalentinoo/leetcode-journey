/**
 * Problem: 1614. Maximum Nesting Depth of the Parentheses
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts maximum nesting depth of parentheses in a string
 *
 * @param {string} s - Valid parentheses string with digits and operators
 *
 * @returns {number} Maximum nesting depth
 */
const maxDepth = (s) => {
  // Track current depth and deepest depth seen so far
  let currentDepth = 0,
    maxDepthValue = 0

  // Scan each character in the string
  for (const char of s) {
    // Opening parenthesis deepens nesting and may set a new maximum
    if (char === '(') maxDepthValue = Math.max(maxDepthValue, ++currentDepth)
    // Closing parenthesis reduces the current nesting level
    else if (char === ')') --currentDepth
  }

  // Return the deepest nesting level encountered
  return maxDepthValue
}
