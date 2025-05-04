/**
 * Problem: 946. Validate Stack Sequences
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check if popped can result from pushed using stack operations.
 *
 * @param {number[]} pushed - Pushed sequence
 * @param {number[]} popped - Popped sequence
 *
 * @returns {boolean} - True if valid, else false
 */
const validateStackSequences = (pushed, popped) => {
  // Simulate stack operations to validate the sequence
  const stack = []
  let popIndex = 0

  for (const num of pushed) {
    stack.push(num) // Push current number onto the stack

    // Pop from stack while top matches the popped sequence
    while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop()
      popIndex++
    }
  }

  // If stack is empty, the sequence is valid
  return stack.length === 0
}
