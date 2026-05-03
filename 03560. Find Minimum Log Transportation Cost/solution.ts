/**
 * Problem: 3560. Find Minimum Log Transportation Cost
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum cutting cost for a grid of size n x m
 *
 * @param n - Number of rows
 * @param m - Number of columns
 * @param k - Maximum allowed pieces per cut
 *
 * @returns Minimum total cutting cost
 */
const minCuttingCost = (n: number, m: number, k: number): number => {
  // Initialize total cost to 0
  let totalCost: number = 0

  // Process rows if they exceed the allowed piece limit
  if (n > k) {
    // Calculate how many full groups of size k we can make
    const rowGroups: number = Math.floor(n / k)
    // Calculate remaining rows that don't form a full group
    const remainingRows: number = n - rowGroups * k

    // Add cost for rows: k^(rowGroups) * (remaining rows, minimum 1)
    totalCost += Math.pow(k, rowGroups) * Math.max(1, remainingRows)
  }

  // Process columns if they exceed the allowed piece limit
  if (m > k) {
    // Calculate how many full groups of size k we can make
    const columnGroups: number = Math.floor(m / k)
    // Calculate remaining columns that don't form a full group
    const remainingColumns: number = m - columnGroups * k

    // Add cost for columns: k^(columnGroups) * (remaining columns, minimum 1)
    totalCost += Math.pow(k, columnGroups) * Math.max(1, remainingColumns)
  }

  // Return the total cutting cost
  return totalCost
}
