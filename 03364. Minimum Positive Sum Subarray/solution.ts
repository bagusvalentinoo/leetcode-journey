/**
 * Problem: 3364. Minimum Positive Sum Subarray
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum sum of subarray with length between l and r
 *
 * @param nums - Input array of integers
 * @param l - Minimum subarray length
 * @param r - Maximum subarray length
 *
 * @returns Minimum positive subarray sum or -1 if not found
 */
const minimumSumSubarray = (nums: number[], l: number, r: number): number => {
  // Initialize result to infinity
  let minPositiveSum: number = Infinity

  // Try all possible window sizes from l to r
  for (let windowSize: number = l; windowSize <= r; ++windowSize) {
    // Calculate sum of first window
    let currentWindowSum: number = 0

    // Sum the first windowSize elements
    for (let i: number = 0; i < windowSize; ++i) currentWindowSum += nums[i]

    // Check if current window sum is positive
    if (currentWindowSum > 0)
      minPositiveSum = Math.min(minPositiveSum, currentWindowSum)

    // Slide the window across the array
    for (let i: number = windowSize; i < nums.length; ++i) {
      // Update window sum by adding new element and removing oldest
      currentWindowSum += nums[i] - nums[i - windowSize]

      // Check if updated window sum is positive
      if (currentWindowSum > 0)
        minPositiveSum = Math.min(minPositiveSum, currentWindowSum)
    }
  }

  // Return -1 if no positive sum found, otherwise return minPositiveSum
  return minPositiveSum === Infinity ? -1 : minPositiveSum
}
