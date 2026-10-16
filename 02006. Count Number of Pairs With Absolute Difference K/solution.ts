/**
 * Problem: 2006. Count Number of Pairs With Absolute Difference K
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts pairs with absolute difference k
 *
 * @param nums - Input array of integers
 * @param k - Target absolute difference
 *
 * @returns Number of pairs with difference k
 */
const countKDifference = (nums: number[], k: number): number => {
  // Counter for pairs with absolute difference k
  let pairsCount: number = 0

  // Iterate over each starting index
  for (let i = 0; i < nums.length; i++) {
    // Compare current element with every later element
    for (let j = i + 1; j < nums.length; j++) {
      // Check if pair has absolute difference k
      if (Math.abs(nums[i] - nums[j]) == k)
        // Increment pair count for matching difference
        pairsCount++
    }
  }

  // Return the total number of pairs with difference k
  return pairsCount
}
