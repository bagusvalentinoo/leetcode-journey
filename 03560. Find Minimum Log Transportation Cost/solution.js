/**
 * Problem: 3560. Find Minimum Log Transportation Cost
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum cutting cost for a grid of size n x m
 *
 * @param {number} n - Number of rows
 * @param {number} m - Number of columns
 * @param {number} k - Maximum allowed pieces per cut
 *
 * @returns {number} Minimum total cutting cost
 */
const minCuttingCost = (n, m, k) => {
  // Initialize total cost to 0
  let totalCost = 0

  // Process rows if they exceed the allowed piece limit
  if (n > k) {
    // Calculate how many full groups of size k we can make
    const rowGroups = Math.floor(n / k)
    // Calculate remaining rows that don't form a full group
    const remainingRows = n - rowGroups * k

    // Add cost for rows: k^(rowGroups) * (remaining rows, minimum 1)
    totalCost += Math.pow(k, rowGroups) * Math.max(1, remainingRows)
  }

  // Process columns if they exceed the allowed piece limit
  if (m > k) {
    // Calculate how many full groups of size k we can make
    const columnGroups = Math.floor(m / k)
    // Calculate remaining columns that don't form a full group
    const remainingColumns = m - columnGroups * k

    // Add cost for columns: k^(columnGroups) * (remaining columns, minimum 1)
    totalCost += Math.pow(k, columnGroups) * Math.max(1, remainingColumns)
  }

  // Return the total cutting cost
  return totalCost
}
