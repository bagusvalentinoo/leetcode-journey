/**
 * Problem: 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the longest strictly increasing or decreasing contiguous subarray
 *
 * @param nums - Array of integers
 *
 * @returns Length of the longest monotonic subarray
 */
const longestMonotonicSubarray = (nums: number[]): number => {
  // Track the lengths ending at the current element for both directions
  let increasingLength: number = 1,
    decreasingLength: number = 1,
    longestLength: number = 1

  // Compare each element with its predecessor
  for (let i: number = 1; i < nums.length; i++) {
    // Extend or reset the increasing sequence
    increasingLength = nums[i] > nums[i - 1] ? increasingLength + 1 : 1
    // Extend or reset the decreasing sequence
    decreasingLength = nums[i] < nums[i - 1] ? decreasingLength + 1 : 1
    // Keep the longest sequence seen so far
    longestLength = Math.max(longestLength, increasingLength, decreasingLength)
  }

  // Return the longest monotonic subarray length
  return longestLength
}
