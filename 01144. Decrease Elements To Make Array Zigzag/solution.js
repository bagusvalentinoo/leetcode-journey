/**
 * Problem: 1144. Decrease Elements To Make Array Zigzag
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum moves to make an array zigzag
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} Minimum moves
 */
const movesToMakeZigzag = (nums) => {
  // Helper function to calculate moves for a given zigzag pattern
  const calcMoves = (peakAtEven) => {
    // Initialize total moves counter
    let moves = 0

    // Store array length for reuse
    const n = nums.length

    // Iterate through each element in the array
    for (let i = 0; i < n; i++) {
      // Get left and right neighbor value or Infinity if out of bounds
      const left = i > 0 ? nums[i - 1] : Infinity,
        right = i < n - 1 ? nums[i + 1] : Infinity

      // Determine if current index should be a peak or valley
      if ((i % 2 === 0) !== peakAtEven) {
        // Find the smaller neighbor value
        const minNeighbor = Math.min(left, right)

        // If current value is not less than minNeighbor, calculate required moves
        if (nums[i] >= minNeighbor) moves += nums[i] - (minNeighbor - 1)
      }
    }

    // Return total moves for this zigzag pattern
    return moves
  }

  // Return the minimum moves required for either zigzag pattern
  return Math.min(calcMoves(true), calcMoves(false))
}
