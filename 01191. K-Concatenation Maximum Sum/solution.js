/**
 * Problem: 1191. K-Concatenation Maximum Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Returns the max subarray sum for k concatenations of arr
 *
 * @param {number[]} arr - Input array
 * @param {number} k - Number of concatenations
 *
 * @returns {number} - Max subarray sum modulo 1e9+7
 */
const kConcatenationMaxSum = (arr, k) => {
  // Define the modulo constant for the result
  const MOD = 1000000007

  // Initialize the total sum of the array, local maximum for Kadane's algorithm, and global maximum subarray sum
  let totalSum = 0,
    localMax = 0,
    globalMax = 0

  // Iterate through the array to calculate total sum and find the maximum subarray sum using Kadane's algorithm
  arr.forEach((num) => {
    totalSum += num // Accumulate the sum of all elements

    localMax = Math.max(num, localMax + num) // Update local maximum subarray sum ending at current element
    globalMax = Math.max(localMax, globalMax) // Update global maximum subarray sum found so far
  })

  // If k is 1 or the maximum subarray sum is 0, return the result modulo MOD
  if (k === 1 || globalMax === 0) return globalMax % MOD

  // Run Kadane's algorithm again to account for the case when the array is concatenated twice
  arr.forEach((num) => {
    localMax = Math.max(num, localMax + num) // Update local maximum for the second concatenation
    globalMax = Math.max(localMax, globalMax) // Update global maximum if a larger sum is found
  })

  // If the total sum of the array is positive, add the sum of the middle (k-2) arrays to the global maximum
  if (totalSum > 0) globalMax += (k - 2) * totalSum

  // Return the final result modulo MOD
  return globalMax % MOD
}
