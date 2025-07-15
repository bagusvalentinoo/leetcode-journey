/**
 * Problem: 1031. Maximum Sum of Two Non-Overlapping Subarrays
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the maximum sum of two non-overlapping subarrays
 *
 * @param {number[]} nums - Input array
 * @param {number} firstLen - First subarray length
 * @param {number} secondLen - Second subarray length
 *
 * @returns {number} - Maximum sum of two non-overlapping subarrays
 */
const maxSumTwoNoOverlap = (nums, firstLen, secondLen) => {
  // Create prefix sum array with length n+1, initialized to 0
  // This allows us to calculate subarray sums efficiently using prefix[j] - prefix[i]
  const prefix = Array(nums.length + 1).fill(0)

  // Build prefix sum array where prefix[i] contains sum of elements from index 0 to i-1
  // This preprocessing step enables O(1) subarray sum calculations later
  for (let i = 0; i < nums.length; i += 1) prefix[i + 1] = prefix[i] + nums[i]

  // Return maximum of two scenarios:
  // 1. First subarray of length firstLen comes before second subarray of length secondLen
  // 2. First subarray of length secondLen comes before second subarray of length firstLen
  // This covers all possible arrangements of the two non-overlapping subarrays
  return Math.max(
    checkMax(prefix, firstLen, secondLen),
    checkMax(prefix, secondLen, firstLen)
  )
}

/**
 * Helper function to check maximum sum when first subarray precedes second
 *
 * @param {number[]} p - Prefix sum array
 * @param {number} l - First subarray length
 * @param {number} m - Second subarray length
 *
 * @returns {number} - Maximum sum of two subarrays in specified order
 */
const checkMax = (p, l, m) => {
  // Initialize maximum sum found for the first subarray (length l)
  let maxLSum = 0,
    // Initialize the overall maximum sum of both subarrays combined
    totalMax = 0

  // Iterate through the array starting from position where both subarrays can fit
  // i represents the end position of the second subarray
  for (let i = l + m; i < p.length; i += 1) {
    // Calculate prefix sum up to the start of second subarray (includes first subarray)
    const sumIncL = p[i - m],
      // Calculate prefix sum up to the start of first subarray (excludes first subarray)
      sumExcL = p[i - m - l]
    // Calculate sum of first subarray by subtracting prefix sums
    const lSum = sumIncL - sumExcL

    // Update maximum sum found so far for first subarray
    maxLSum = Math.max(lSum, maxLSum)

    // Calculate prefix sum up to current position (includes second subarray)
    const sumIncM = p[i]
    // Calculate sum of second subarray by subtracting prefix sums
    const mSum = sumIncM - sumIncL

    // Update overall maximum by combining current second subarray sum with best first subarray sum
    totalMax = Math.max(totalMax, mSum + maxLSum)
  }

  // Return the maximum sum of two non-overlapping subarrays
  return totalMax
}
