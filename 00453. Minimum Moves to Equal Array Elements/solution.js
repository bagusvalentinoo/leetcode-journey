/**
 * Problem: 453. Minimum Moves to Equal Array Elements
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the minimum number of moves to make all array elements equal
 *
 * @param {number[]} nums - Array of integers
 *
 * @return {number} Minimum number of moves required
 */
const minMoves = (nums) => {
  // Initialize total sum and minimum value with first element
  let sum = nums[0],
    min = nums[0]

  // Iterate through remaining elements
  for (let i = 1; i < nums.length; i++) {
    // Update minimum if current element is smaller
    if (nums[i] < min) min = nums[i]

    // Add current element to total sum
    sum += nums[i]
  }

  // Moves needed to reduce all elements to minimum
  return sum - nums.length * min
}
