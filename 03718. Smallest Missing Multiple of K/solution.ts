/**
 * Problem: 3718. Smallest Missing Multiple of K
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the smallest positive multiple of k missing from nums
 *
 * @param nums - Array of integers
 * @param k - The divisor integer
 *
 * @returns The smallest missing positive multiple of k
 */
const missingMultiple = (nums: number[], k: number): number => {
  // Store array elements in a Set for O(1) lookup
  const numSet: Set<number> = new Set(nums)

  // Start with the first positive multiple of k
  let target: number = k

  // Increment by k until finding a multiple not present in nums
  while (numSet.has(target)) target += k

  // Return the smallest missing multiple
  return target
}
