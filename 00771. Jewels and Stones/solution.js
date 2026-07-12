/**
 * Problem: 771. Jewels and Stones
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts how many stones are jewels
 *
 * @param {string} jewels - String of characters representing jewel types
 * @param {string} stones - String of characters representing stones
 *
 * @returns {number} Number of stones that are jewels
 */
const numJewelsInStones = (jewels, stones) => {
  // Counter for stones that are jewels
  let jewelCount = 0

  // Create a Set of jewel characters for O(1) lookup
  const jewelSet = new Set(jewels)

  // Check each stone against the jewel set
  for (const stone of stones) {
    // If stone is in jewel set, increment counter
    if (jewelSet.has(stone)) jewelCount++
  }

  // Return the total count of stones that are jewels
  return jewelCount
}
