/**
 * Problem: 1413. Minimum Value to Get Positive Step by Step Sum
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum start value so that cumulative sum never falls below 1
 *
 * @param nums - Input array of integers
 *
 * @returns Minimum starting value needed
 */
const minStartValue = (nums: number[]): number => {
  // Variable to store running prefix sum
  let runningPrefixSum: number = 0
  // Variable to track minimum prefix sum encountered
  let minimumPrefix: number = Infinity

  // Calculate prefix sums and find the minimum
  for (let i: number = 0; i < nums.length; i++) {
    // Add current element to running prefix sum
    runningPrefixSum += nums[i]
    // Update minimum prefix sum if current is smaller
    minimumPrefix = Math.min(minimumPrefix, runningPrefixSum)
  }

  // Start value must be at least 1, and also enough to offset negative minimum
  return Math.max(1, 1 - minimumPrefix)
}
