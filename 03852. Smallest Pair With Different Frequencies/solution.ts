/**
 * Problem: 3852. Smallest Pair With Different Frequencies
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds pair of numbers with different frequencies
 *
 * @param nums - Input array of integers
 *
 * @returns Two numbers with different frequencies or [-1, -1]
 */
const minDistinctFreqPair = (nums: number[]): number[] => {
  // Frequency array for numbers 1-100 (index 0 unused)
  const frequency: number[] = new Array(101).fill(0)

  // Count occurrences of each number
  for (const num of nums) frequency[num]++

  // Track first number found with frequency
  let firstNumber: number = -1

  // Iterate through all possible numbers
  for (let i: number = 0; i < frequency.length; i++) {
    // Check if number exists in array
    if (frequency[i] > 0) {
      // If we already found a first number, compare frequencies
      if (firstNumber !== -1) {
        // If frequencies differ, return the pair
        if (frequency[firstNumber] !== frequency[i]) return [firstNumber, i]
      }
      // Otherwise, set as first number
      else firstNumber = i
    }
  }

  // No valid pair found
  return [-1, -1]
}
