/**
 * Problem: 150. Evaluate Reverse Polish Notation
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Define an object to map operators to their corresponding functions
const op = {
  // Define the addition operation
  '+': (x, y) => x + y,
  // Define the subtraction operation
  '-': (x, y) => x - y,
  // Define the multiplication operation
  '*': (x, y) => x * y,
  // Define the division operation, truncating the result to an integer
  '/': (x, y) => (x / y) >> 0
}

/**
 * Evaluates Reverse Polish Notation
 *
 * @param {string[]} tokens - Array of RPN tokens
 *
 * @returns {number} - Result of evaluation
 */
const evalRPN = (tokens) => {
  // Initialize an empty array to use as a stack
  const stack = []

  // Iterate over each token in the input array
  for (const token of tokens) {
    // Attempt to parse the token as an integer
    const number = parseInt(token, 10)

    // Check if the token is not a number (i.e., an operator)
    if (Number.isNaN(number)) {
      // Pop the top value from the stack as the second operand
      const secondOperand = stack.pop()

      // Pop the next value from the stack as the first operand
      const firstOperand = stack.pop()

      // Perform the operation and push the result back onto the stack
      stack.push(op[token](firstOperand, secondOperand))
    }
    // If the token is a number, push it onto the stack
    else stack.push(number)
  }

  // Return the final result, which is the last value on the stack
  return stack.pop()
}
