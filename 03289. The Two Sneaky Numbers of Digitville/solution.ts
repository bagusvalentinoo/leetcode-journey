/**
 * Problem: 3289. The Two Sneaky Numbers of Digitville
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds two duplicates using XOR
 *
 * @param nums - Array with two duplicates
 *
 * @returns The two duplicate numbers
 */
const getSneakyNumbers = (nums: number[]): number[] => {
  // Map to store frequency of each number
  const frequencyMap = new Map<number, number>()

  // Array to store the two duplicate numbers
  const duplicateNumbers = []

  // Iterate through each number in the array
  for (const currentNumber of nums) {
    // Increment frequency count for current number
    const frequencyCount = (frequencyMap.get(currentNumber) || 0) + 1

    // Update frequency in map
    frequencyMap.set(currentNumber, frequencyCount)

    // If number appears twice, add to result
    if (frequencyCount === 2) duplicateNumbers.push(currentNumber)
    // If we found both duplicates, return immediately
    if (duplicateNumbers.length === 2) return duplicateNumbers
  }

  // Return empty array if not found (should not happen)
  return []
}
