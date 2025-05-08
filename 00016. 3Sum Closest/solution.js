/**
 * Problem: 16. 3Sum Closest
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Find the sum of three array elements closest to a target value
 *
 * @param {number[]} nums - Input array of numbers
 * @param {number} target - Target value
 *
 * @returns {number} - Sum closest to target
 */
const threeSumClosest = (nums, target) => {
  // Initialize result with Infinity to help with comparisons
  let res = Infinity
  // Sort array to enable two-pointer technique
  nums.sort((a, b) => a - b)

  // Iterate through possible first elements
  for (let i = 0; i <= nums.length - 3; i++) {
    // Skip duplicates to avoid redundant calculations
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    // Optimization: if smallest possible sum is greater than target
    if (nums[i] + nums[left] + nums[left + 1] > target) {
      // Update result if this sum is closer to target
      if (
        Math.abs(nums[i] + nums[left] + nums[left + 1] - target) <
        Math.abs(res - target)
      )
        res = nums[i] + nums[left] + nums[left + 1]

      break
    }

    // Optimization: if largest possible sum is less than target
    if (nums[i] + nums[right] + nums[right - 1] < target) {
      // Update result if this sum is closer to target
      if (
        Math.abs(nums[i] + nums[right] + nums[right - 1] - target) <
        Math.abs(res - target)
      )
        res = nums[i] + nums[right] + nums[right - 1]

      continue
    }

    // Use two-pointer technique to find closest sum
    while (left < right) {
      const sum = nums[right] + nums[left] + nums[i]

      // Return early if exact match found
      if (sum === target) return target
      // Update result if current sum is closer to target
      if (Math.abs(target - sum) < Math.abs(target - res)) res = sum
      // Move pointers based on comparison with target
      if (sum < target) left++
      else right--
    }
  }

  return res
}
