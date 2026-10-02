/**
 * Problem: 1837. Sum of Digits in Base K
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sums digits of n after converting from base 10 to base k
 *
 * @param n - Integer in base 10
 * @param k - Target base
 *
 * @returns Sum of base-k digits in base 10
 */
const sumBase = (n: number, k: number): number => {
  // Accumulate base-k digits
  let digitSum: number = 0

  // Extract least significant digit until n is consumed
  while (n > 0) {
    // Add current remainder as the next base-k digit
    digitSum += n % k

    // Drop the processed digit
    n = Math.floor(n / k)
  }

  // Return total of base-k digits
  return digitSum
}
