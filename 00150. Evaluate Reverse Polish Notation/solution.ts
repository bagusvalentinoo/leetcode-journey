/**
 * Problem: 150. Evaluate Reverse Polish Notation
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Evaluates Reverse Polish Notation
 *
 * @param tokens - Array of RPN tokens
 *
 * @returns - Result of evaluation
 */
const evalRPN = (tokens: string[]): number => {
  // Initialize an empty stack to store numbers during evaluation
  const stack: number[] = []

  // Define a map of operators and their corresponding operations
  const operators: Record<string, (a: number, b: number) => number> = {
    '+': (a, b) => a + b, // Addition operator
    '-': (a, b) => a - b, // Subtraction operator
    '*': (a, b) => a * b, // Multiplication operator
    '/': (a, b) => Math.trunc(a / b) // Division operator with truncation
  }

  // Iterate through each token in the input array
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i] // Current token being processed

    // Check if the token is an operator
    if (token in operators) {
      // Pop the top two numbers from the stack for the operation
      const second = stack.pop(),
        first = stack.pop()

      // Perform the operation and push the result back onto the stack
      stack.push(operators[token](first!, second!))
    }
    // Parse the token as a number and push it onto the stack
    else stack.push(parseInt(token))
  }

  // Return the final result, which is the only value left in the stack
  return stack[0]
}
