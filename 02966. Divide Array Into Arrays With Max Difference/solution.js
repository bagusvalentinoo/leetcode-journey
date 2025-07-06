/**
 * Problem: 2966. Divide Array Into Arrays With Max Difference
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 25 ms (Beats 100%)
 */

/**
 * Divides array into triplets with max difference <= k
 *
 * @param {number[]} nums - Array of numbers
 * @param {number} k - Max difference allowed per triplet
 *
 * @returns {number[][]} - Array of triplets or empty array if impossible
 */
const divideArray = (nums, k) => {
  // Create a sorted copy of the input array for processing
  const sortedNumbers = Int32Array.from(nums)

  // Sort the array in ascending order
  sortedNumbers.sort()

  // Initialize an empty array to hold the result triplets
  const result = []

  // Process array in groups of 3 elements
  for (let i = 0; i < sortedNumbers.length; i += 3) {
    // Check if current triplet exceeds maximum allowed difference
    if (sortedNumbers[i + 2] - sortedNumbers[i] > k) return []

    // Add valid triplet to result
    result.push([sortedNumbers[i], sortedNumbers[i + 1], sortedNumbers[i + 2]])
  }

  return result
}
