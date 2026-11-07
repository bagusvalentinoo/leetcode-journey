/**
 * Problem: 2341. Maximum Number of Pairs in Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count equal-number pairs and remaining values
 *
 * @param nums - Input array of integers
 *
 * @returns Number of pairs and leftover integers
 */
const numberOfPairs = (nums: number[]): number[] => {
  // Track values waiting to be matched with an equal value
  const unmatched: Set<number> = new Set()

  // Count each completed pair
  let pairs: number = 0

  // Match each number with an earlier unmatched equal number when possible
  for (const number of nums) {
    if (unmatched.has(number)) {
      unmatched.delete(number)
      pairs++
    } else unmatched.add(number)
  }

  // Return the completed pairs and remaining unmatched integers
  return [pairs, unmatched.size]
}
