/**
 * Problem: 453. Minimum Moves to Equal Array Elements
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the minimum number of moves to make all array elements equal
 *
 * @param nums - Array of integers
 *
 * @return Minimum number of moves required
 */
const minMoves = (nums: number[]): number => {
  // Initialize total sum and minimum value with first element
  let sum: number = nums[0],
    min: number = nums[0]

  // Iterate through remaining elements
  for (let i: number = 1; i < nums.length; i++) {
    // Update minimum if current element is smaller
    if (nums[i] < min) min = nums[i]

    // Add current element to total sum
    sum += nums[i]
  }

  // Moves needed to reduce all elements to minimum
  return sum - nums.length * min
}
