/**
 * Problem: 1695. Maximum Erasure Value
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Finds the max sum of a subarray with unique elements
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Max sum of unique subarray
 */
const maximumUniqueSubarray = (nums) => {
  // Create a fixed-size array to track occurrences of numbers (since nums[i] <= 10000)
  const numCountMap = new Int8Array(10001)
  // Initialize the current sum of the window
  let currentSum = 0,
    // Initialize the maximum sum found so far
    maxSum = 0

  // Use two pointers to define the sliding window
  for (let left = 0, right = 0; right < nums.length; right++) {
    // Increment the count for the current number and add it to the current sum
    numCountMap[nums[right]]++, (currentSum += nums[right])

    // If the current number appears more than once, shrink the window from the left
    while (numCountMap[nums[right]] > 1)
      numCountMap[nums[left]]--, (currentSum -= nums[left++])

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum)
  }

  // Return the maximum sum of a subarray with unique elements
  return maxSum
}
