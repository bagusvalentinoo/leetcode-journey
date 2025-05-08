/**
 * Problem: 955. Delete Columns to Make Sorted II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculates minimum columns to delete for lexicographical ordering of strings
 *
 * @param {string[]} strs - Array of equal-length strings
 *
 * @returns {number} - Minimum columns to delete
 */
const minDeletionSize = (strs) => {
  // Get number of strings and their length
  const n = strs.length
  const m = strs[0].length
  // Count of columns to delete
  let res = 0
  // Track if each pair of adjacent strings is sorted
  const sorted = Array(n - 1).fill(false)

  // Iterate through each column
  for (let j = 0; j < m; j++) {
    // Assume we can keep this column
    let canKeep = true

    // Check if column maintains lexicographical ordering
    for (let i = 0; i < n - 1; i++) {
      // If pair not already sorted and current column breaks ordering
      if (!sorted[i] && strs[i][j] > strs[i + 1][j]) {
        canKeep = false
        break
      }
    }

    // If column breaks ordering, mark for deletion
    if (!canKeep) res++
    // Otherwise mark pairs as sorted if this column ensures ordering
    else
      for (let i = 0; i < n - 1; i++)
        if (strs[i][j] < strs[i + 1][j]) sorted[i] = true

    // If all pairs are sorted, we're done
    if (sorted.every(Boolean)) break
  }

  return res
}
