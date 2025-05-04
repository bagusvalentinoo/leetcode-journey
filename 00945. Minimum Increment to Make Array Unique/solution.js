/**
 * Problem: 945. Minimum Increment to Make Array Unique
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 13 ms (Beats 99.40%)
 */

/**
 * Make array elements unique with minimum increments
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Minimum increments needed
 */
const minIncrementForUnique = (nums) => {
  // Define a maximum range for counting occurrences
  const MAX = nums.length * 3
  // Create a count array to track occurrences of each number
  const count = new Array(MAX).fill(0)

  // Count occurrences of each number in the input array
  for (const num of nums) count[num]++

  let steps = 0

  // Adjust counts to make all numbers unique with minimum increments
  for (let i = 0; i < MAX; i++) {
    if (count[i] > 1) {
      const extra = count[i] - 1
      count[i + 1] += extra
      steps += extra
    }
  }

  // Return the total number of increments needed
  return steps
}
