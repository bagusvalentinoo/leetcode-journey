/**
 * Problem: 3498. Reverse Degree of a String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates reverse degree of a string
 *
 * @param s - Input string
 *
 * @returns Sum of (reverse alphabet value) * (position index + 1)
 */
const reverseDegree = (s: string): number => {
  // Initialize sum accumulator to store the total reverse degree
  let totalSum: number = 0

  // Iterate through each character in the input string
  for (let index: number = 0; index < s.length; index++) {
    // Calculate reverse alphabet position (a=26, b=25, ..., z=1)
    const reversePosition: number = 123 - s.charCodeAt(index)

    // Add to total: reversePosition multiplied by 1-indexed position
    totalSum += reversePosition * (index + 1)
  }

  // Return the calculated reverse degree sum
  return totalSum
}
