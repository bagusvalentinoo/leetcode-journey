/**
 * Problem: 1995. Count Special Quadruplets
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts quadruplets where sum of first three equals fourth
 *
 * @param nums - Input array of integers
 *
 * @returns Number of special quadruplets
 */
const countQuadruplets = (nums: number[]): number => {
  // Store array length for loop boundaries
  const n: number = nums.length

  // Return early when fewer than four elements exist
  if (n < 4) return 0

  // Initialize counter for valid quadruplets
  let ans: number = 0
  // Store counts of nums[d] - nums[c] pairs for indices after b
  const diff: number[] = new Array<number>(199).fill(0)

  // Iterate middle index b backwards to reuse suffix pair counts
  for (let b = n - 3; b >= 1; b--) {
    // Store value at c = b + 1 newly available for this b
    const cb: number = nums[b + 1]

    // Add pairs with c = b + 1 and every later d
    for (let x = b + 2; x < n; x++) diff[nums[x] - cb + 99]++

    // Store value at current middle index b
    const target: number = nums[b]

    // Count matching a indices using stored difference frequencies
    for (let a = 0; a < b; a++) {
      // Compute needed difference nums[a] + nums[b]
      const k: number = nums[a] + target

      // Accumulate matches when the needed difference is in range
      if (k <= 99) ans += diff[k + 99]
    }
  }

  // Return total count of special quadruplets
  return ans
}
