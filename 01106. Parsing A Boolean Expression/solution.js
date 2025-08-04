/**
 * Problem: 1106. Parsing A Boolean Expression
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Evaluates a boolean expression string with 't', 'f', '!', '&', and '|' operators
 *
 * @param {string} expression - The boolean expression
 *
 * @returns {boolean} - Evaluation result
 */
const parseBoolExpr = (expression) => {
  // Helper function to recursively evaluate the boolean expression
  const evaluate = (expr, index) => {
    // Get the current character at the given index
    const char = expr[index]

    // If the character is 't', return true and move to the next index
    if (char === 't') return [true, index + 1]
    // If the character is 'f', return false and move to the next index
    if (char === 'f') return [false, index + 1]

    // If the character is '!', evaluate the next expression and negate its value
    if (char === '!') {
      // Skip '!' and '(' by moving index + 2, then evaluate the inner expression
      const [value, nextIndex] = evaluate(expr, index + 2)
      // Return the negated value and skip the closing ')'
      return [!value, nextIndex + 1]
    }

    // If the character is '&' (AND) or '|' (OR), evaluate all inner expressions
    if (char === '&' || char === '|') {
      // Determine if the operation is AND
      const isAndOperator = char === '&'

      // Start evaluating after the operator and opening parenthesis
      let currentIndex = index + 2
      // Initialize result for AND as true, for OR as false
      let result = isAndOperator

      // Loop until the closing parenthesis is found
      while (expr[currentIndex] !== ')') {
        // Skip commas between expressions
        if (expr[currentIndex] === ',') {
          currentIndex++
          continue
        }

        // Recursively evaluate the next inner expression
        const [value, nextIndex] = evaluate(expr, currentIndex)

        // For AND, result is true only if all values are true
        // For OR, result is true if any value is true
        if (isAndOperator) result = result && value
        else result = result || value

        // Short-circuit: For AND, if result is false, break early
        // For OR, if result is true, break early
        if ((isAndOperator && !result) || (!isAndOperator && result)) {
          // Move to the closing parenthesis
          while (expr[currentIndex] !== ')') currentIndex++
          // Return the result and skip the closing ')'
          return [result, currentIndex + 1]
        }

        // Move to the next expression
        currentIndex = nextIndex
      }

      // Return the final result and skip the closing ')'
      return [result, currentIndex + 1]
    }

    // Default case: return false and move to the next index
    return [false, index + 1]
  }

  // Start evaluating the expression from index 0 and return the result
  return evaluate(expression, 0)[0]
}
