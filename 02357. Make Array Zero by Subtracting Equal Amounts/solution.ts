/**
 * Problem: 2357. Make Array Zero by Subtracting Equal Amounts
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count the distinct positive values that require separate operations
 *
 * @param nums - Non-negative integers to reduce to zero
 *
 * @returns Minimum number of operations
 */
const minimumOperations = (nums: number[]): number => {
  // Store each distinct positive value because each requires one operation
  const positiveValues: Set<number> = new Set(
    nums.filter((number: number): boolean => number > 0)
  )

  // Return the number of distinct positive values
  return positiveValues.size
}
