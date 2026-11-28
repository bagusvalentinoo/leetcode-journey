/**
 * Problem: 2367. Number of Arithmetic Triplets
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count arithmetic triplets with the required common difference
 *
 * @param {number[]} nums - Strictly increasing array of integers
 * @param {number} diff - Required difference between adjacent triplet values
 *
 * @returns {number} Number of arithmetic triplets
 */
const arithmeticTriplets = (nums, diff) => {
  // Store every value for constant-time triplet membership checks
  const values = new Set(nums)

  // Count values that can serve as the last element of a triplet
  let triplets = 0

  // Check whether each value has both required preceding values
  for (const number of nums) {
    if (values.has(number - diff) && values.has(number - 2 * diff)) triplets++
  }

  // Return the number of valid arithmetic triplets
  return triplets
}
