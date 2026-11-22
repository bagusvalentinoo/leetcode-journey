/**
 * Problem: 2160. Minimum Sum of Four Digit Number After Splitting Digits
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the minimum sum by assigning the smallest digits to the tens places
 *
 * @param num - Four-digit input number
 *
 * @returns Minimum possible sum
 */
const minimumSum = (num: number): number => {
  // Sort the digits so the smallest two contribute to the tens places
  const digits: number[] = String(num)
    .split('')
    .map(Number)
    .sort((a: number, b: number): number => a - b)

  // Return the sum of the two formed numbers
  return (digits[0] + digits[1]) * 10 + digits[2] + digits[3]
}
