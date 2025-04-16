/**
 * Problem: 912. Sort an Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Sorts an array of numbers
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[]} - Sorted array
 */
const sortArray = (nums) => {
  const n = nums.length // Array length

  // Initialize min and max values
  let min = nums[0]
  let max = nums[0]

  // Find min and max values in the array
  for (let i = 1; i < n; ++i) {
    // Update min and max values
    min = Math.min(min, nums[i])
    max = Math.max(max, nums[i])
  }

  // If array is too large, use quick sort
  if (n + max - min > n * Math.log2(n)) return nums.sort((a, b) => a - b)

  // Initialize count array
  let i = 0
  const counts = new Uint32Array(max - min + 1)

  // Count occurrences of each number
  for (let i = 0; i < n; ++i) counts[nums[i] - min]++

  // Sort array using count array
  for (let j = 0; j < counts.length; ++j)
    // Place each number in its correct position
    while (counts[j]--) nums[i++] = j + min

  return nums
}
