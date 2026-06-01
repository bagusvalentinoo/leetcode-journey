/**
 * Problem: 1374. Generate a String With Characters That Have Odd Counts
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generates string where at most one char differs
 *
 * @param n - String length
 *
 * @returns Generated string
 */
const generateTheString = (n: number): string => {
  // If n is odd, we can use all 'a's
  if (n % 2 === 1) return 'a'.repeat(n)

  // If n is even, use (n-1) 'a's and one 'b'
  return 'a'.repeat(n - 1) + 'b'
}
