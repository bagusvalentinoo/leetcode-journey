/**
 * Problem: 1186. Maximum Subarray Sum with One Deletion
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the maximum subarray sum with at most one deletion
 *
 * @param {number[]} arr - Input array
 *
 * @returns {number} - Maximum sum
 */
const maximumSum = (arr) => {
  // Initialize the maximum sum without deletion to the first element
  let maxSumNoDelete = arr[0],
    // Initialize the maximum sum with one deletion to 0 (no deletion yet)
    maxSumOneDelete = 0,
    // Initialize the overall maximum sum to the first element
    overallMax = arr[0]

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Update maxSumOneDelete: either extend previous oneDelete subarray or delete current element
    maxSumOneDelete = Math.max(maxSumOneDelete + arr[i], maxSumNoDelete)
    // Update maxSumNoDelete: either extend previous noDelete subarray or start new subarray at current element
    maxSumNoDelete = Math.max(maxSumNoDelete + arr[i], arr[i])
    // Update overallMax to the largest value found so far
    overallMax = Math.max(overallMax, Math.max(maxSumNoDelete, maxSumOneDelete))
  }

  // Return the maximum subarray sum with at most one deletion
  return overallMax
}
