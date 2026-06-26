/**
 * Problem: 1551. Minimum Operations to Make Array Equal
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to make array with median n
 *
 * @param n - Input number
 *
 * @returns Minimum operations needed
 */
const minOperations = (n: number): number => Math.floor((n * n) / 4)
