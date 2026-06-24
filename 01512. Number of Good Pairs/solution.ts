/**
 * Problem: 1512. Number of Good Pairs
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of identical pairs in an array
 *
 * @param nums - Input array of integers
 *
 * @returns Number of identical pairs
 */
const numIdenticalPairs = (nums: number[]): number => {
  // Map to store frequency of each number
  const frequencyMap: Map<number, number> = new Map()

  // Counter for identical pairs
  let pairsCount: number = 0

  // Iterate through each element in the array
  for (const currentNumber of nums) {
    // Get current frequency of this number (default to 0)
    const currentFrequency: number = frequencyMap.get(currentNumber) ?? 0

    // Add current frequency to pair count (pairs with previous occurrences)
    pairsCount += currentFrequency
    // Update frequency map with incremented count
    frequencyMap.set(currentNumber, currentFrequency + 1)
  }

  // Return the total number of identical pairs found in the array
  return pairsCount
}
