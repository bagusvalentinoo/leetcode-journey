/**
 * Problem: 3736. Minimum Moves to Equal Array Elements III
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum moves to make all array elements equal by incrementing elements
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Minimum total number of moves
 */
const minMoves = (nums) => {
  // Find maximum element in the array
  const maxVal = Math.max(...nums)

  // Accumulate total moves required to bring all elements to maxVal
  let totalMoves = 0

  // Calculate difference from maximum element for each number
  for (let i = 0; i < nums.length; i++) totalMoves += maxVal - nums[i]

  // Return the minimum total number of moves
  return totalMoves
}
