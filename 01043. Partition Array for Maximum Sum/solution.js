/**
 * Problem: 1043. Partition Array for Maximum Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Computes the maximum sum after partitioning an array of integers
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - Maximum partition length
 *
 * @returns {number} - Maximum sum after partitioning
 */
const maxSumAfterPartitioning = (nums, k) => {
  // Get the length of the input array
  const arrayLength = nums.length

  // Initialize DP array where dp[i] represents max sum for first i elements
  // Size is arrayLength + 1 to handle 0-based indexing with 1-based DP
  const dp = new Array(arrayLength + 1).fill(0)

  // Iterate through each position in the array (1-indexed for DP)
  for (
    let currentPosition = 1;
    currentPosition <= arrayLength;
    currentPosition++
  ) {
    // Track the maximum element in current partition being considered
    let maxElementInPartition = 0
    // Track the maximum sum achievable ending at current position
    let maxSumAtPosition = 0

    // Try all possible partition sizes from 1 to k (or remaining elements)
    for (
      let partitionSize = 1;
      partitionSize <= k && currentPosition - partitionSize >= 0;
      partitionSize++
    ) {
      // Update max element by including nums[currentPosition - partitionSize]
      maxElementInPartition = Math.max(
        maxElementInPartition,
        nums[currentPosition - partitionSize]
      )

      // Calculate sum: previous optimal sum + (max element * partition size)
      // dp[currentPosition - partitionSize] gives optimal sum before this partition
      maxSumAtPosition = Math.max(
        maxSumAtPosition,
        dp[currentPosition - partitionSize] +
          maxElementInPartition * partitionSize
      )
    }

    // Store the optimal sum for current position
    dp[currentPosition] = maxSumAtPosition
  }

  // Return the maximum sum for the entire array
  return dp[arrayLength]
}
