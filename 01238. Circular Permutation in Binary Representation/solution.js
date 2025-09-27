/**
 * Problem: 1238. Circular Permutation in Binary Representation
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 66 ms (Beats 100%)
 */

/**
 * Generates a circular permutation in Gray code order
 *
 * @param {number} n - Number of bits
 * @param {number} start - Starting integer
 *
 * @returns {number[]} - Circular permutation array
 */
const circularPermutation = (n, start) => {
  // Initialize an empty array to store the circular permutation sequence
  const result = []

  // Loop through all possible n-bit numbers (from 0 to 2^n - 1)
  for (let i = 0; i < 1 << n; i++)
    // Generate the i-th Gray code, then XOR with start to rotate the sequence
    result.push(start ^ i ^ (i >> 1))

  // Return the resulting circular permutation array
  return result
}
