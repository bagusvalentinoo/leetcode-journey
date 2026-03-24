/**
 * Problem: 1323. Maximum 69 Number
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Changes at most one '6' to '9' to maximize the given number
 *
 * @param num - Number with digits 6 and 9
 *
 * @returns Maximum possible number
 */
const maximum69Number = (num: number): number =>
  parseInt(num.toString().replace('6', '9'))
