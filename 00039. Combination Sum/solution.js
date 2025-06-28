/**
 * Problem: 39. Combination Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds all unique combinations that sum to target using unlimited repetitions.
 *
 * @param {number[]} candidates - Array of distinct integers
 * @param {number} target - Target sum
 *
 * @returns {number[][]} - All unique combinations that sum to target
 */
const combinationSum = (candidates, target) => {
  // Store all valid combinations that sum to target
  const results = []

  // Helper function to perform backtracking
  const backtrack = (startIndex, remainingTarget, currentCombination) => {
    // Found valid combination when target becomes 0
    if (remainingTarget === 0) return results.push([...currentCombination])
    // Stop if target becomes negative
    if (remainingTarget < 0) return

    // Try each candidate starting from current index
    for (let i = startIndex; i < candidates.length; i++) {
      // Add current candidate to combination
      currentCombination.push(candidates[i])
      // Recursively search with same index (allows reuse)
      backtrack(i, remainingTarget - candidates[i], currentCombination)
      // Remove last candidate for next iteration
      currentCombination.pop()
    }
  }

  // Start backtracking from index 0 with full target
  backtrack(0, target, [])

  return results
}
