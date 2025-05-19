/**
 * Problem: 974. Subarray Sums Divisible by K
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Counts subarrays with sum divisible by k
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Divisor
 *
 * @returns {number} - Count of subarrays with sum divisible by k
 */
const subarraysDivByK = (nums, k) => {
  // Array to store frequency of remainders
  const remainderMap = new Array(k).fill(0)

  // Initialize with 1 for sum=0 case (empty subarray)
  remainderMap[0] = 1

  // Counter for valid subarrays
  let result = 0
  // Running sum of elements
  let runningSum = 0

  for (let i = 0; i < nums.length; i++) {
    // Add current number to running sum
    runningSum += nums[i]

    // Calculate remainder when divided by k
    let remainder = runningSum % k

    // Handle negative remainders
    if (remainder < 0) remainder += k

    // Add frequency of this remainder to result
    result += remainderMap[remainder]
    // Increment frequency of this remainder
    remainderMap[remainder]++
  }

  return result
}
