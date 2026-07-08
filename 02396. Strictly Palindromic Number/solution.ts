/**
 * Problem: 2396. Strictly Palindromic Number
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if number is strictly palindromic in all bases from 2 to n-2
 *
 * @param n - Input integer
 *
 * @returns True if strictly palindromic
 */
const isStrictlyPalindromic = (n: number): boolean => {
  // For any n >= 4, it's impossible to be strictly palindromic
  if (n >= 4) return false

  // For n < 4, check base cases
  // n = 1: true (trivially palindromic)
  // n = 2: true (trivially palindromic)
  // n = 3: true (trivially palindromic)
  return true
}
