/**
 * Problem: 1646. Get Maximum in Generated Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generate array by rules and track the maximum value
 *
 * @param n - Upper bound index for generation
 *
 * @returns Maximum integer in the generated array
 */
const getMaximumGenerated = (n: number): number => {
  // Handle base cases where array is [0] or [0, 1]
  if (n === 0) return 0
  if (n === 1) return 1

  // Initialize generated array of length n + 1 with base values
  const nums: number[] = new Array(n + 1).fill(0)
  nums[1] = 1

  // Track maximum value seen so far
  let maxValue: number = 1

  // Generate each element from index 2 to n using even/odd rules
  for (let i: number = 2; i <= n; i++) {
    // Even index copies value at half index, odd index sums the two middle values
    if (i % 2 === 0) nums[i] = nums[i / 2]
    else nums[i] = nums[Math.floor(i / 2)] + nums[Math.floor(i / 2) + 1]

    // Update maximum with newly generated value
    if (nums[i] > maxValue) maxValue = nums[i]
  }

  // Return the maximum integer in the generated array
  return maxValue
}
