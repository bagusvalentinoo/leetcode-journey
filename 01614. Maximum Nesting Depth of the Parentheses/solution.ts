/**
 * Problem: 1614. Maximum Nesting Depth of the Parentheses
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts maximum nesting depth of parentheses in a string
 *
 * @param s - Valid parentheses string with digits and operators
 *
 * @returns Maximum nesting depth
 */
const maxDepth = (s: string): number => {
  // Track current depth and deepest depth seen so far
  let currentDepth: number = 0,
    maxDepthValue: number = 0

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
