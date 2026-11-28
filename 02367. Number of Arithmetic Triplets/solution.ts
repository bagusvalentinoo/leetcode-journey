/**
 * Problem: 2367. Number of Arithmetic Triplets
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count arithmetic triplets with the required common difference
 *
 * @param nums - Strictly increasing array of integers
 * @param diff - Required difference between adjacent triplet values
 *
 * @returns Number of arithmetic triplets
 */
const arithmeticTriplets = (nums: number[], diff: number): number => {
  // Store every value for constant-time triplet membership checks
  const values: Set<number> = new Set(nums)

  // Count values that can serve as the last element of a triplet
  let triplets: number = 0

  // Check whether each value has both required preceding values
  for (const number of nums) {
    if (values.has(number - diff) && values.has(number - 2 * diff)) triplets++
  }

  // Return the number of valid arithmetic triplets
  return triplets
}
