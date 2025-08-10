/**
 * Problem: 1130. Minimum Cost Tree From Leaf Values
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum sum of non-leaf node values in a binary tree built from arr
 *
 * @param {number[]} arr - Array of positive integers (leaf values)
 *
 * @returns {number} - Minimum sum of non-leaf node values
 */
const mctFromLeafValues = (arr) => {
  // Initialize a stack to keep track of the decreasing sequence of leaf values
  const stack = []
  // Initialize the result variable to accumulate the minimum sum of non-leaf node values
  let res = 0

  // Iterate through each number in the input array
  for (const num of arr) {
    // While the stack is not empty and the top of the stack is less than or equal to the current number
    while (stack.length && stack[stack.length - 1] <= num) {
      // Pop the top element from the stack, which is the smaller leaf value
      const mid = stack.pop()

      // If the stack is not empty, add the product of the popped value and the smaller of the new top or current number to the result
      if (stack.length) res += mid * Math.min(stack[stack.length - 1], num)
      // If the stack is empty, add the product of the popped value and the current number to the result
      else res += mid * num
    }

    // Push the current number onto the stack
    stack.push(num)
  }

  // After processing all numbers, combine the remaining values in the stack
  while (stack.length > 1) res += stack.pop() * stack[stack.length - 1]

  // Return the accumulated minimum sum of non-leaf node values
  return res
}
