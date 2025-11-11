/**
 * Problem: 3542. Minimum Operations to Convert All Elements to Zero
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 14 ms (Beats 100%)
 */

/**
 * Returns the minimum operations to reduce all array elements to zero
 *
 * @param nums - Array of non-negative integers
 *
 * @returns - Minimum operations required
 */
const minOperations = (nums: number[]): number => {
  // Initialize an empty stack to keep track of elements
  const stack = []

  // Initialize a variable to count the number of operations
  let operationsCount = 0

  // Iterate through each element in the input array
  for (const num of nums) {
    // Remove elements from the stack that are greater than the current element
    while (stack.length && stack[stack.length - 1] > num) stack.pop()

    // Skip the current iteration if the element is zero
    if (num === 0) continue

    // If the stack is empty or the top element is less than the current element
    if (!stack.length || stack[stack.length - 1] < num) {
      // Increment the operations count
      operationsCount++

      // Push the current element onto the stack
      stack.push(num)
    }
  }

  // Return the total number of operations
  return operationsCount
}
