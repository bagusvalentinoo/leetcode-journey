/**
 * Problem: 3483. Unique 3-Digit Even Numbers
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts distinct even 3-digit numbers from digit permutations
 *
 * @param digits - Array of digits
 *
 * @returns Count of valid even 3-digit numbers
 */
const totalNumbers = (digits: number[]): number => {
  // Set to store unique valid numbers
  const uniqueNumbers: Set<number> = new Set()

  // First digit position (hundreds)
  for (let firstIdx: number = 0; firstIdx < digits.length; firstIdx++) {
    // Digit at hundreds place
    const firstDigit: number = digits[firstIdx]

    // Second digit position (tens)
    for (let secondIdx: number = 0; secondIdx < digits.length; secondIdx++) {
      // Digit at tens place
      const secondDigit: number = digits[secondIdx]

      // Third digit position (units)
      for (let thirdIdx: number = 0; thirdIdx < digits.length; thirdIdx++) {
        // Digit at units place
        const thirdDigit: number = digits[thirdIdx]

        // Check conditions: number is even, all indices distinct, first digit not zero
        if (
          thirdDigit % 2 === 0 &&
          firstIdx !== secondIdx &&
          secondIdx !== thirdIdx &&
          firstIdx !== thirdIdx &&
          firstDigit !== 0
        ) {
          // Construct 3-digit number from digits
          const numberValue: number =
            firstDigit * 100 + secondDigit * 10 + thirdDigit

          // Add to set
          uniqueNumbers.add(numberValue)
        }
      }
    }
  }

  // Return count of unique valid numbers
  return uniqueNumbers.size
}
