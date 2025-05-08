/**
 * Problem: 18. 4Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Finds all unique quadruplets that sum to target
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 *
 * @returns {number[][]} - Unique quadruplets that sum to target
 */
const fourSum = (nums, target) => {
  // Store result quadruplets
  const res = []

  // Sort array for easier processing
  nums.sort((a, b) => a - b)

  const len = nums.length

  // Early return if not enough elements
  if (len < 4) return res

  // First pointer loop
  for (let i = 0; i < len - 3; i++) {
    // Skip duplicates for first element
    if (i !== 0 && nums[i] === nums[i - 1]) continue
    // Break if smallest possible sum exceeds target
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    // Skip if largest possible sum is too small
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target)
      continue

    // Second pointer loop
    for (let j = i + 1; j < len - 2; j++) {
      // Skip duplicates for second element
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      // Break if smallest possible sum exceeds target
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      // Skip if largest possible sum is too small
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue

      // Use two-pointer technique for the remaining elements
      let left = j + 1,
        right = len - 1

      // Two pointers moving toward each other
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]

        if (sum === target) {
          // Found a valid quadruplet
          res.push([nums[i], nums[j], nums[left], nums[right]])

          // Skip duplicates for third element
          while (left < right && nums[left] === nums[left + 1]) left++
          left++

          // Skip duplicates for fourth element
          while (left < right && nums[right] === nums[right - 1]) right--
          right--
        } else if (sum < target) left++ // Sum too small, increase left
        else right-- // Sum too large, decrease right
      }
    }
  }

  return res
}
