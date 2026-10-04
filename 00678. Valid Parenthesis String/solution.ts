/**
 * Problem: 678. Valid Parenthesis String
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if string with '(', ')' and '*' can be valid
 *
 * @param s - Input string of '(', ')' and '*'
 *
 * @returns True if string can be valid
 */
const checkValidString = (s: string): boolean => {
  // Minimum and Maximum possible open parentheses balance
  let low: number = 0,
    high: number = 0

  // Process each character
  for (const char of s) {
    // Open parenthesis increases both bounds
    if (char === '(') (low++, high++)
    // Close parenthesis decreases both bounds
    else if (char === ')') (low--, high--)
    // Star can be '(', ')' or empty: decrease low, increase high
    else (low--, high++)

    // Too many closing parentheses in every interpretation
    if (high < 0) return false
    // Clamp low to zero since negative balance means treating stars as empty
    if (low < 0) low = 0
  }

  // Valid only if zero balance is reachable
  return low === 0
}
