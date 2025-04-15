/**
 * Problem: 907. Sum of Subarray Minimums
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/**
 * Find sum of all subarrays minimums
 *
 * @param {number[]} arr - Array of numbers
 *
 * @returns {number} - Sum of all subarrays minimums
 */
const sumSubarrayMins = (arr) => {
  let ans = 0
  const stack = []

  // monotonic increasing stack
  for (let i = 0; i <= arr.length; i++) {
    // while stack is not empty and current element is smaller than top of stack
    while (
      stack.length &&
      (i === arr.length || arr[stack[stack.length - 1]] > arr[i])
    ) {
      const curr = stack.pop() // Index of current element

      // Num of subarrays where curr is min
      const left = stack.length ? curr - stack[stack.length - 1] : curr + 1
      const right = i - curr
      const numSubArrs = left * right
      ans = (ans + arr[curr] * numSubArrs) % (10 ** 9 + 7)
    }

    // Push current index to stack/
    stack.push(i)
  }

  return ans
}
