/**
 * Problem: 1047. Remove All Adjacent Duplicates In String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Returns the top element of the stack or '' if empty
 *
 * @param {string[]} stack - Stack as an array
 *
 * @returns {string} - Top element or '' if empty
 */
const topOfStack = (stack) => {
  // If the stack is empty, return an empty string
  if (stack.length === 0) return ''

  // Return the last element in the stack (top of stack)
  return stack[stack.length - 1]
}

/**
 * Removes adjacent duplicate characters from a string
 *
 * @param {string} s - Input string
 *
 * @returns {string} - String with adjacent duplicates removed
 */
const removeDuplicates = (s) => {
  // Initialize an empty array to use as a stack
  const stack = []

  // Iterate through each character in the input string
  for (let i = 0; i < s.length; i++) {
    // Get the character at the top of the stack
    const top = topOfStack(stack)

    // If the current character is the same as the top of the stack, remove the top element
    if (s[i] === top) stack.pop()
    // Otherwise, add the current character to the stack
    else stack.push(s[i])
  }

  // Join the stack into a string and return the result
  return stack.join('')
}
