/**
 * Problem: 3903. Smallest Stable Index I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds smallest stable index where prefix max minus suffix min <= k
 *
 * @param nums - Input array of integers
 * @param k - Maximum allowed instability score
 *
 * @returns Smallest stable index or -1 if none exists
 */
const firstStableIndex = (nums: number[], k: number): number => {
  // Get array length for iteration bounds
  const n: number = nums.length

  // Build suffix minimum array: suffixMin[i] = min(nums[i..n-1])
  const suffixMin: number[] = new Array(n)

  // Last element suffix min is itself
  suffixMin[n - 1] = nums[n - 1]

  // Fill suffix minima from right to left
  for (let i = n - 2; i >= 0; i--)
    suffixMin[i] = Math.min(suffixMin[i + 1], nums[i])

  // Track prefix maximum while scanning left to right
  let prefixMax: number = 0

  // Check each index for stability condition
  for (let i = 0; i < n; i++) {
    // Update prefix maximum to include current element
    prefixMax = Math.max(prefixMax, nums[i])

    // Compute instability score and check against k
    if (prefixMax - suffixMin[i] <= k) return i
  }

  // No stable index found
  return -1
}
