/**
 * Problem: 2119. A Number After a Double Reversal
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a number remains the same after a double reversal
 *
 * @param num - Integer to check
 *
 * @returns True if reversed2 equals num, false otherwise
 */
const isSameAfterReversals = (num: number): boolean =>
  num === 0 || num % 10 !== 0
