/**
 * Problem: 3347. Maximum Frequency of an Element After Performing Operations II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 151 ms (Beats 100%)
 */

/**
 * Finds the max frequency of elements after at most numOperations
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Range limit
 * @param {number} numOperations - Max operations
 *
 * @returns {number} - Max achievable frequency
 */
const maxFrequency = (nums, k, numOperations) => {
  // Return 0 if the input array is empty
  if (nums.length === 0) return 0

  // Sort the input array in ascending order
  nums.sort((a, b) => a - b)

  // Store the length of the input array
  const n = nums.length

  // Create a frequency map to count occurrences of each number
  const freq = new Map()

  // Populate the frequency map with counts of each number in the array
  for (const x of nums) freq.set(x, (freq.get(x) || 0) + 1)

  // Initialize the maximum frequency result to 1
  let ans = 1

  // Define a helper function to find the lower bound of a target in a sorted array
  const lowerBound = (arr, target) => {
    let l = 0,
      r = arr.length

    // Perform binary search to find the first index >= target
    while (l < r) {
      const mid = (l + r) >> 1

      if (arr[mid] < target) l = mid + 1
      else r = mid
    }

    return l
  }

  // Define a helper function to find the upper bound of a target in a sorted array
  const upperBound = (arr, target) => {
    let l = 0,
      r = arr.length

    // Perform binary search to find the first index > target
    while (l < r) {
      const mid = (l + r) >> 1

      if (arr[mid] <= target) l = mid + 1
      else r = mid
    }

    return l
  }

  // Iterate through each unique number and its frequency in the map
  for (const [key, val] of freq.entries()) {
    // Calculate the lower and upper bounds of the range for the current number
    const low = key - k,
      high = key + k

    // Find the indices of numbers within the range using binary search
    const left = lowerBound(nums, low),
      right = upperBound(nums, high)

    // Calculate the count of numbers within the range
    const inRange = right - left

    // Calculate the number of elements visited but not equal to the current number
    const visited = inRange - val

    // Determine the minimum operations that can be applied
    const minLoop = Math.min(visited, numOperations)

    // Update the maximum frequency result
    ans = Math.max(ans, val + minLoop)
  }

  // Initialize the left pointer for the sliding window
  let l = 0

  // Iterate through the array using the right pointer
  for (let r = 0; r < n; r++) {
    // Adjust the left pointer to maintain the range constraint
    while (l <= r && nums[r] - nums[l] > 2 * k) l++

    // Calculate the current window size
    const w = r - l + 1

    // Update the maximum frequency result considering the window size
    ans = Math.max(ans, Math.min(w, numOperations))
  }

  // Return the maximum frequency result
  return ans
}
