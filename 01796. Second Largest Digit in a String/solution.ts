/**
 * Problem: 1796. Second Largest Digit in a String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds second largest distinct digit in alphanumeric string
 *
 * @param s - Alphanumeric string of lowercase letters and digits
 *
 * @returns Second largest digit or -1 if it does not exist
 */
const secondHighest = (s: string): number => {
  // Initialize largest and second largest digits as not found
  let largest: number = -1,
    secondLargest: number = -1

  // Iterate through each character in the string
  for (const currentChar of s) {
    // Skip non-digit characters
    if (currentChar >= '0' && currentChar <= '9') {
      // Convert digit character to numeric value
      const digit: number = Number(currentChar)

      // If digit is greater than largest
      if (digit > largest) {
        // Shift largest to second largest
        secondLargest = largest
        // Update largest with current digit
        largest = digit
      }
      // If digit is distinct from largest and greater than second largest
      else if (digit > secondLargest && digit != largest)
        // Update second largest
        secondLargest = digit
    }
  }

  // Return second largest digit or -1 if it does not exist
  return secondLargest
}
