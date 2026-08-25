/**
 * Problem: 1337. The K Weakest Rows in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds k weakest rows by soldier count using binary search per row
 *
 * @param {number[][]} mat - Binary matrix with soldiers (1) before civilians (0)
 * @param {number} k - Number of weakest rows to return
 *
 * @returns {number[]} Indices of k weakest rows ordered weakest to strongest
 */
const kWeakestRows = (mat, k) =>
  mat
    // Map each row to [index, soldierCount] using lastIndexOf(1) + 1
    .map((x, i) => [i, x.lastIndexOf(1) + 1])
    // Sort by soldier count ascending, then by index ascending for ties
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
    // Take first k weakest rows
    .slice(0, k)
    // Extract only the row indices from the pairs
    .map((x) => x[0])
