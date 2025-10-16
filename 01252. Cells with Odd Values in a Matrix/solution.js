/**
 * Problem: 1252. Cells with Odd Values in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count cells with odd values after performing increments
 *
 * @param {number} m - Number of rows
 * @param {number} n - Number of columns
 * @param {number[][]} indices - Array of [row, col] pairs to increment
 *
 * @returns {number} - Count of odd-valued cells
 */
const oddCells = (m, n, indices) => {
  // Create a Uint8Array to track increments per row (byte per row).
  const rowCount = new Uint8Array(m),
    // Create a Uint8Array to track increments per column (byte per col).
    columnCount = new Uint8Array(n)

  // oddRow counts how many rows currently have odd totals.
  let oddRow = 0,
    // oddColumn counts how many columns currently have odd totals.
    oddColumn = 0

  // Iterate over indices to apply row and column increments.
  for (let i = 0; i < indices.length; ++i) {
    // Increment row count, use &1 to check parity, update oddRow.
    ;(++rowCount[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow
    // Increment column count, use &1 to check parity, update oddColumn.
    ;(++columnCount[indices[i][1]] & 1) === 1 ? ++oddColumn : --oddColumn
  }

  // Compute number of odd cells using inclusion-exclusion formula.
  return oddRow * n + oddColumn * m - 2 * oddRow * oddColumn
}
