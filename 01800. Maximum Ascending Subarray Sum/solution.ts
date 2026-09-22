/**
 * Problem: 1800. Maximum Ascending Subarray Sum
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds maximum sum of a strictly ascending subarray
 *
 * @param nums - Input array of positive integers
 *
 * @returns Maximum ascending subarray sum
 */
const maxAscendingSum = (nums: number[]): number => {
  // Initialize max and current sums with first element
  let maxSum: number = nums[0],
    currentSum: number = nums[0]

  // Iterate over remaining elements to extend or restart ascending run
  for (let index: number = 1; index < nums.length; index++)
    // Extend run when strictly ascending, otherwise restart from current element
    if (nums[index] > nums[index - 1]) {
      // Add current element to ongoing ascending sum
      currentSum += nums[index]

      // Update max sum when current run exceeds it
      if (currentSum > maxSum) maxSum = currentSum
    } else {
      // Reset current sum to current element as new run start
      currentSum = nums[index]

      // Update max sum for single element run if larger
      if (currentSum > maxSum) maxSum = currentSum
    }

  // Return the maximum ascending subarray sum found
  return maxSum
}
