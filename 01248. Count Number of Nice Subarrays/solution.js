/**
 * Problem: 1248. Count Number of Nice Subarrays
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Counts subarrays with exactly k odd numbers
 *
 * @param {number[]} nums - Array of numbers
 * @param {number} k - Target count of odd numbers
 *
 * @returns {number} - Number of valid subarrays
 */
const numberOfSubarrays = (nums, k) => {
  // Initialize the starting index of the sliding window
  let start = 0,
    // Initialize the ending index of the sliding window
    end = 0,
    // Track the count of odd numbers in the current window
    oddCount = 0,
    // Store the total number of valid subarrays found
    subCount = 0,
    // Temporary counter for valid subarrays ending at current position
    tempCount = 0

  // Iterate through the array using the end pointer
  while (end < nums.length) {
    // If the current number is odd, increment the odd count and reset tempCount
    if (nums[end] % 2) {
      oddCount++
      tempCount = 0
    }

    // Shrink the window from the start while the odd count matches k
    while (oddCount === k) {
      // If the number at the start is odd, decrement the odd count
      if (nums[start] % 2) oddCount--

      // Move the start pointer forward and increment tempCount
      start++
      tempCount++
    }

    // Add the number of valid subarrays ending at the current end position
    subCount += tempCount
    // Move the end pointer forward
    end++
  }

  // Return the total count of valid subarrays
  return subCount
}
