/**
 * Problem: 771. Jewels and Stones
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts how many stones are jewels
 *
 * @param jewels - String of characters representing jewel types
 * @param stones - String of characters representing stones
 *
 * @returns Number of stones that are jewels
 */
const numJewelsInStones = (jewels: string, stones: string): number => {
  // Counter for stones that are jewels
  let jewelCount: number = 0

  // Create a Set of jewel characters for O(1) lookup
  const jewelSet: Set<string> = new Set(jewels)

  // Check each stone against the jewel set
  for (const stone of stones) {
    // If stone is in jewel set, increment counter
    if (jewelSet.has(stone)) jewelCount++
  }

  // Return the total count of stones that are jewels
  return jewelCount
}
