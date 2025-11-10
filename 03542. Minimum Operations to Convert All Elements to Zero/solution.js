/**
 * Problem: 3542. Minimum Operations to Convert All Elements to Zero
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 15 ms (Beats 100%)
 */

/**
 * Counts operations to make array strictly increasing
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Minimum operations
 */
const minOperations = (nums) => {
  // Initialize an empty stack to keep track of elements
  const stack = []

  // Initialize a counter to count the minimum operations
  let operationsCount = 0

  // Iterate through each element in the input array
  for (const num of nums) {
    // Remove elements from the stack while the top of the stack is greater than the current number
    while (stack.length && stack[stack.length - 1] > num) stack.pop()

    // Skip the current iteration if the number is zero
    if (num === 0) continue

    // If the stack is empty or the top of the stack is less than the current number
    if (!stack.length || stack[stack.length - 1] < num) {
      // Increment the operations counter
      operationsCount++

      // Push the current number onto the stack
      stack.push(num)
    }
  }

  // Return the total count of operations
  return operationsCount
}
