/**
 * Problem: 2563. Count the Number of Fair Pairs
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 86 ms (Beats 100%)
 */

/**
 * Counts the number of fair pairs in the array
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} lower - The lower bound of the sum
 * @param {number} upper - The upper bound of the sum
 *
 * @returns {number} - The number of fair pairs
 */
const countFairPairs = (nums, lower, upper) => {
  // Helper function to count pairs with sum less than a given threshold
  const countPairsLessThan = (nums, threshold) => {
    let count = 0 // Counter for pairs with sum less than threshold
    let left = 0 // Left pointer
    let right = nums.length - 1 // Right pointer

    // Use two-pointer approach to count pairs
    while (left < right) {
      // Compute the sum of the current pair
      const currentSum = nums[left] + nums[right]

      // If the sum is less than the threshold, count all pairs with left fixed
      if (currentSum < threshold) {
        count += right - left
        left++
      }
      // If the sum is greater than or equal to the threshold, move right pointer
      else right--
    }

    // Return the count of pairs with sum less than threshold
    return count
  }

  // Sort the array to enable efficient two-pointer approach
  nums.sort((a, b) => a - b)

  // Calculate pairs with sum < upper+1, then subtract pairs with sum < lower
  return countPairsLessThan(nums, upper + 1) - countPairsLessThan(nums, lower)
}
