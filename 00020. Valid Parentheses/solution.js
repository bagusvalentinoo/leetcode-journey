/**
 * Problem: 20. Valid Parentheses
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Validates string containing parentheses
 *
 * @param {string} s - Input string with brackets
 *
 * @returns {boolean} - True if brackets are valid
 */
const isValid = (s) => {
  // Create an empty stack to track opening brackets
  const stack = []
  // Map closing brackets to their corresponding opening brackets
  const pairs = { ')': '(', ']': '[', '}': '{' }

  // Iterate through each character in the string
  for (const char of s) {
    // If character is an opening bracket, push to stack
    if (!pairs[char]) stack.push(char)
    // If character is a closing bracket, check if it matches with the last opening bracket
    else if (stack.pop() !== pairs[char]) return false
  }

  // Valid only if all brackets were properly closed (stack is empty)
  return stack.length === 0
}
