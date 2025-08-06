/**
 * Problem: 40. Combination Sum II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns all unique combinations in candidates where the numbers sum to target
 *
 * @param {number[]} candidates - Input numbers
 * @param {number} target - Desired sum
 *
 * @returns {number[][]} - Unique combinations summing to target
 */
const combinationSum2 = (candidates, target) => {
  // Initialize an array to store the resulting unique combinations
  const result = []

  // Sort the candidates array to facilitate skipping duplicates and early stopping
  candidates.sort((a, b) => a - b)

  const backtrack = (start, target, path) => {
    // If the remaining target is zero, a valid combination is found
    if (target === 0) {
      result.push([...path]) // Add a copy of the current path to the result

      return
    }

    // Iterate through the candidates starting from the current index
    for (let i = start; i < candidates.length; i++) {
      // Skip duplicate numbers to avoid duplicate combinations
      if (i > start && candidates[i] === candidates[i - 1]) continue
      // If the current candidate exceeds the remaining target, stop further exploration
      if (candidates[i] > target) break

      // Include the current candidate in the path
      path.push(candidates[i])

      // Recurse with the next index and reduced target
      backtrack(i + 1, target - candidates[i], path)

      // Backtrack: remove the last candidate added to try other possibilities
      path.pop()
    }
  }

  // Start the backtracking process with initial values
  backtrack(0, target, [])

  // Return the list of all unique combinations found
  return result
}
