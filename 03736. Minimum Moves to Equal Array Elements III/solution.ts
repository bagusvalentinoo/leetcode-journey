/**
 * Problem: 3736. Minimum Moves to Equal Array Elements III
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum moves to make all array elements equal by incrementing elements
 *
 * @param nums - Input array of integers
 *
 * @returns Minimum total number of moves
 */
const minMoves = (nums: number[]): number => {
  // Find maximum element in the array
  const maxVal: number = Math.max(...nums)

  // Accumulate total moves required to bring all elements to maxVal
  let totalMoves: number = 0

  // Calculate difference from maximum element for each number
  for (let i = 0; i < nums.length; i++) totalMoves += maxVal - nums[i]

  // Return the minimum total number of moves
  return totalMoves
}
