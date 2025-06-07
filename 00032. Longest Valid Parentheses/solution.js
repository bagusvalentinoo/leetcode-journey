/**
 * Problem: 32. Longest Valid Parentheses
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the length of the longest valid parentheses substring
 *
 * @param {string} s - String containing parentheses
 *
 * @returns {number} - Length of longest valid parentheses substring
 */
const longestValidParentheses = (s) => {
  // Stack to track positions, initialized with -1 to handle edge cases
  const positionStack = [-1]
  // Tracks the maximum length of valid parentheses found
  let maxLength = 0

  for (let index = 0; index < s.length; index++) {
    // Push opening parenthesis position to stack
    if (s[index] === '(') positionStack.push(index)
    else {
      // Pop for closing parenthesis
      positionStack.pop()

      // If stack is empty, push current position as new reference point
      if (positionStack.length === 0) positionStack.push(index)
      // Calculate length between current position and last position in stack
      else
        maxLength = Math.max(
          maxLength,
          index - positionStack[positionStack.length - 1]
        )
    }
  }

  return maxLength
}
