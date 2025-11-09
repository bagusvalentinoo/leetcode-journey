/**
 * Problem: 2169. Count Operations to Obtain Zero
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts operations to reduce two numbers to zero
 *
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 *
 * @returns {number} - Number of operations
 */
const countOperations = (num1, num2) => {
  // Initialize variables `a` and `b` with the input numbers `num1` and `num2`
  let a = num1,
    b = num2

  // Initialize the operation counter `ops` to zero
  let ops = 0

  // Loop until either `a` or `b` becomes zero
  while (a > 0 && b > 0) {
    // If `a` is smaller than `b`, swap their values
    if (a < b) {
      const t = a

      a = b
      b = t
    }

    // Increment `ops` by the quotient of `a` divided by `b`
    ops += Math.floor(a / b)
    // Update `a` to the remainder of `a` divided by `b`
    a = a % b
  }

  // Return the total number of operations performed
  return ops
}
