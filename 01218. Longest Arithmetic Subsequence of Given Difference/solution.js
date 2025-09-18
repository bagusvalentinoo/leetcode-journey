/**
 * Problem: 1218. Longest Arithmetic Subsequence of Given Difference
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 20 ms (Beats 100%)
 */

/**
 * Returns length of longest subsequence with given difference
 *
 * @param {number[]} arr - Input array
 * @param {number} difference - Required difference
 *
 * @returns {number} - Length of longest subsequence
 */
const longestSubsequence = (arr, difference) => {
  // Get the length of the input array
  const n = arr.length

  // Initialize a dynamic programming array to store the length of the longest subsequence ending at each index
  const dp = Array(n).fill(1)

  // Create a map to store the last index of each value encountered
  const valueToIndexMap = new Map()

  // Iterate through the array
  for (let i = 0; i < n; i++) {
    // If the current value exists in the map, update dp[i] to the maximum length found so far
    if (valueToIndexMap.has(arr[i]))
      dp[i] = Math.max(dp[i], dp[valueToIndexMap.get(arr[i])] + 1)

    // Store the index of the value that is arr[i] + difference for future reference
    valueToIndexMap.set(arr[i] + difference, i)
  }

  // Return the maximum value from the dp array, which represents the length of the longest subsequence
  return Math.max(...dp)
}
