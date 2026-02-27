/**
 * Problem: 1356. Sort Integers by The Number of 1 Bits
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Maximum value constraint for the problem
const MAXIMUM_VALUE = 10000

// Bit mask to extract original value (14 bits for values up to 10000)
const VALUE_BIT_MASK = (1 << 14) - 1

// Precompute popcount (number of set bits) for all possible values
const POPCOUNT_TABLE = (() => {
  // Initialize table with 0 for 0 and 1 for 1 (base cases)
  const table = new Uint8Array(MAXIMUM_VALUE + 1)

  // Build table using dynamic programming: popcount(n) = popcount(n >> 1) + (n & 1)
  for (let value = 1; value <= MAXIMUM_VALUE; value += 1)
    // Calculate popcount for each value using dynamic programming
    table[value] = table[value >>> 1] + (value & 1)

  // Return precomputed table
  return table
})()

/**
 * Sorts array by number of 1 bits, then by numeric value
 *
 * @param {number[]} arr - Input array of integers
 *
 * @returns {number[]} Sorted array by bit count then value
 */
const sortByBits = (arr) => {
  // Get length of input array
  const length = arr.length

  // Handle edge cases
  if (length <= 1) return arr

  // Create array to store packed keys (bitCount << 14) | value
  const packedKeys = new Uint32Array(length)

  // Pack each value with its popcount in higher bits
  for (let index = 0; index < length; index += 1) {
    // Ensure value is an integer
    const value = arr[index] | 0

    // Pack value with its popcount in higher bits
    packedKeys[index] = (POPCOUNT_TABLE[value] << 14) | value
  }

  // Sort packed keys (automatically sorts by popcount first, then value)
  packedKeys.sort()

  // Extract original values back from sorted packed keys
  for (let index = 0; index < length; index += 1)
    // Extract original value from packed key
    arr[index] = packedKeys[index] & VALUE_BIT_MASK

  // Return sorted array
  return arr
}
