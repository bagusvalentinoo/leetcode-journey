/**
 * Problem: 1217. Minimum Cost to Move Chips to The Same Position
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum cost to move chips to the same position
 *
 * @param {number[]} position - Array of chip positions
 *
 * @returns {number} - Minimum cost
 */
const minCostToMoveChips = (position) => {
  // Initialize counters for chips at even and odd positions
  let evenCount = 0,
    oddCount = 0

  // Iterate through each chip position in the array
  for (const pos of position) {
    // If the position is even, increment evenCount
    if (pos % 2 === 0) evenCount++
    // If the position is odd, increment oddCount
    else oddCount++
  }

  // Return the minimum of oddCount and evenCount as the minimum cost
  return Math.min(oddCount, evenCount)
}
