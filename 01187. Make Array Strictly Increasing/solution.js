/**
 * Problem: 1187. Make Array Strictly Increasing
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 19 ms (Beats 100%)
 */

/**
 * Returns the minimum operations to make arr1 strictly increasing using arr2
 *
 * @param {number[]} arr1 - Target array
 * @param {number[]} arr2 - Replacement options
 *
 * @returns {number} - Minimum operations or -1 if impossible
 */
const makeArrayIncreasing = (arr1, arr2) => {
  // Add sentinels to arr1 for easier boundary handling
  arr1 = [-1, ...arr1, Infinity]
  // Remove duplicates from arr2 and sort it in ascending order
  arr2 = [...new Set(arr2)].sort((a, b) => a - b)

  // Get the length of the modified arr1
  const n = arr1.length
  // Initialize dp array to track minimum operations for each position, filled with Infinity
  const dp = new Array(n).fill(Infinity)

  // Base case: zero operations needed for the first sentinel
  dp[0] = 0

  // Iterate through arr1 from the first real element to the end
  for (let i = 1; i < n; i++) {
    // Find the first index in arr2 where arr2[index] >= arr1[i]
    const j = search(arr2, arr1[i])

    // Try replacing up to k previous elements with arr2 values
    for (let k = 1; k <= Math.min(i - 1, j); k++)
      // Check if the replacement keeps the sequence strictly increasing
      if (arr1[i - k - 1] < arr2[j - k])
        // Update dp[i] with the minimum operations found
        dp[i] = Math.min(dp[i], dp[i - k - 1] + k)

    // Check if the current element is strictly greater than the previous
    if (arr1[i - 1] < arr1[i])
      // Update dp[i] if no replacement is needed
      dp[i] = Math.min(dp[i], dp[i - 1])
  }

  // Return the minimum operations if possible, otherwise -1
  return dp[n - 1] < Infinity ? dp[n - 1] : -1
}

/**
 * Binary search: returns first index where nums[index] >= target
 *
 * @param {number[]} nums - Sorted array
 * @param {number} target - Value to search for
 *
 * @returns {number} - Index in nums
 */
const search = (nums, target) => {
  // Initialize low and high pointers for binary search
  let [low, high] = [0, nums.length]

  // Perform binary search to find the first index where nums[index] >= target
  while (low < high) {
    // Calculate the middle index
    const mid = (low + high) >>> 1

    // If nums[mid] is greater than or equal to target, narrow search to left half
    // Otherwise, search in the right half
    nums[mid] >= target ? (high = mid) : (low = mid + 1)
  }

  // Return the index where nums[index] >= target or nums.length if not found
  return low
}
