/**
 * Problem: 910. Smallest Range II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 14 ms (Beats 100%)
 */

/**
 * Finds the smallest range after modifying each element by k.
 *
 * @param {number[]} nums - Array of integers to be modified
 * @param {number} k - The value to add or subtract from each element
 *
 * @returns {number} - The smallest range after modification
 */
const smallestRangeII = (nums, k) => {
  const { length } = nums // Length of the array

  // Sort the array
  nums.sort((a, b) => a - b)

  // Initialize result
  let res = nums.at(-1) - nums[0]

  // Iterate through the array
  for (let i = 0; i < length - 1; i++) {
    // Calculate new minimum and maximum
    const min = Math.min(nums[0] + k, nums[i + 1] - k)
    const max = Math.max(nums[i] + k, nums.at(-1) - k)
    res = Math.min(max - min, res)
  }

  return res
}
