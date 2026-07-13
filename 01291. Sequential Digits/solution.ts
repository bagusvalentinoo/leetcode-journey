/**
 * Problem: 1291. Sequential Digits
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Get all sequential digits within a given range
 *
 * @param low - Lower bound
 * @param high - Upper bound
 *
 * @returns Sequential digits within range
 */
const sequentialDigits = (low: number, high: number): number[] => {
  // Define a string containing sequential digits from 1 to 9
  const sequentialString: string = '123456789'

  // Initialize an empty array to store the resulting sequential digits
  const result: number[] = []

  // Outer loop to iterate through each character in the string
  for (let start: number = 0; start < sequentialString.length; start++) {
    // Inner loop to create substrings starting from the current character
    for (let end: number = start + 1; end < sequentialString.length; end++) {
      // Extract the substring and convert it to an integer
      const number: number = parseInt(
        sequentialString.substring(start, end + 1)
      )

      // Break the loop if the number exceeds the upper bound
      if (number > high) break
      // Add the number to the result array if it is within the range
      if (low <= number) result.push(number)
    }
  }

  // Return the sorted result array in ascending order
  return result.sort((a, b) => a - b)
}
