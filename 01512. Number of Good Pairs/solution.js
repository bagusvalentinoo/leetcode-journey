/**
 * Problem: 1512. Number of Good Pairs
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of identical pairs in an array
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Number of identical pairs
 */
const numIdenticalPairs = (nums) => {
  // Map to store frequency of each number
  const frequencyMap = new Map()

  // Counter for identical pairs
  let pairsCount = 0

  // Iterate through each element in the array
  for (const currentNumber of nums) {
    // Get current frequency of this number (default to 0)
    const currentFrequency = frequencyMap.get(currentNumber) ?? 0

    // Add current frequency to pair count (pairs with previous occurrences)
    pairsCount += currentFrequency
    // Update frequency map with incremented count
    frequencyMap.set(currentNumber, currentFrequency + 1)
  }

  // Return the total number of identical pairs found in the array
  return pairsCount
}
