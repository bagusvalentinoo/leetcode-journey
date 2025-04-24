/**
 * Problem: 2799. Count Complete Subarrays in an Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of complete subarrays in an array
 *
 * @param {number[]} nums - The input array
 *
 * @returns {number} - The number of complete subarrays
 */
const countCompleteSubarrays = (nums) => {
  // Total number of unique elements in the array
  const totalUnique = new Set(nums).size
  // Frequency map for current window
  const freq = new Map()

  // Counter for complete subarrays
  let count = 0
  // Left pointer of the window
  let left = 0

  //
  for (let right = 0; right < nums.length; right++) {
    // Update frequency of current element
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)

    // Shrink window until it contains all unique elements
    while (freq.size === totalUnique) {
      count += nums.length - right // Add all possible subarrays
      // Update frequency of leftmost element
      freq.set(nums[left], freq.get(nums[left]) - 1)

      // If frequency becomes zero, remove from map
      if (freq.get(nums[left]) === 0) freq.delete(nums[left])

      left++ // Move left pointer
    }
  }

  return count
}
