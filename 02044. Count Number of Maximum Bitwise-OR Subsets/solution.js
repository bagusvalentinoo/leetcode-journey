/**
 * Problem: 2044. Count Number of Maximum Bitwise-OR Subsets
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Returns the count of subsets whose bitwise OR equals the maximum OR of the array
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number} - Number of subsets with maximum OR
 */
const countMaxOrSubsets = (nums) => {
  // Initialize variable to store the maximum possible OR value from all elements in nums
  let maxOR = 0

  // Calculate the maximum OR by iteratively OR-ing each number in nums
  for (const num of nums) maxOR |= num

  /**
   * Recursive backtracking function to count subsets whose OR equals maxOR
   * @param {number} index - Current index in nums being considered
   * @param {number} currentOR - Current OR value of the subset being built
   * @returns {number} - Number of valid subsets from this state
   */
  const backtrack = (index, currentOR) => {
    // Base case: If all elements have been considered, check if currentOR equals maxOR
    if (index === nums.length) return currentOR === maxOR ? 1 : 0

    // Optimization: If currentOR already equals maxOR, all remaining subsets will also be valid
    if (currentOR === maxOR) return 1 << (nums.length - index)

    // Recursive case: Try including or excluding the current element
    return (
      backtrack(index + 1, currentOR | nums[index]) + // Include nums[index] in subset
      backtrack(index + 1, currentOR) // Exclude nums[index] from subset
    )
  }

  // Start backtracking from index 0 with an initial OR value of 0
  return backtrack(0, 0)
}
