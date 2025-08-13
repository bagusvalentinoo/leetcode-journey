/**
 * Problem: 47. Permutations II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns all unique permutations of an array
 *
 * @param {number[]} nums - Array of numbers (may have duplicates)
 *
 * @returns {number[][]} - Unique permutations
 */
const permuteUnique = (nums) => {
  // Sort the input array to handle duplicates efficiently
  nums.sort((a, b) => a - b)

  // Store the length of the input array
  const { length } = nums

  // Initialize the result array to collect unique permutations
  const result = []

  // Backtracking helper function to generate permutations
  const backtrack = (currentPermutation, isUsed) => {
    // If the current permutation is complete, add a copy to the result
    if (currentPermutation.length === length) {
      result.push([...currentPermutation])
      return
    }

    // Iterate through each element in nums
    for (let i = 0; i < length; i++) {
      // Skip used elements
      if (isUsed[i]) continue

      // Skip duplicates: if the current element is the same as the previous and the previous was not used
      if (i > 0 && nums[i] === nums[i - 1] && !isUsed[i - 1]) continue

      // Include nums[i] in the current permutation
      currentPermutation.push(nums[i])

      // Mark the element as used
      isUsed[i] = true

      // Recurse to build the next position
      backtrack(currentPermutation, isUsed)

      // Backtrack: remove the last element and mark it as unused
      currentPermutation.pop()
      isUsed[i] = false
    }
  }

  // Start backtracking with an empty permutation and all elements unused
  backtrack([], Array(length).fill(false))

  // Return the array of unique permutations
  return result
}
