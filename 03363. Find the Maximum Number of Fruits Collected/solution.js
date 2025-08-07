/**
 * Problem: 3363. Find the Maximum Number of Fruits Collected
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 22 ms (Beats 100%)
 */

/**
 * Returns the maximum fruits that can be collected using dynamic programming
 *
 * @param {number[][]} fruits - 2D array of fruit counts
 *
 * @returns {number} - Maximum fruits collected
 */
const maxCollectedFruits = (fruits) => {
  // Get the size of the fruits 2D array
  const n = fruits.length

  // Initialize the total sum of collected fruits
  let totalSum = 0

  // Calculate the halfway point (rounded up)
  const half = Math.ceil((n - 1) / 2)

  // Sum the diagonal elements (fruits[i][i]) as initial collected fruits
  for (let i = 0; i < n; i++) totalSum += fruits[i][i]

  // Helper function to update fruits[i][j] from possible left paths
  const updateFromLeftPaths = (row, col) => {
    let maxFromLeft = 0

    // Check if moving from the top-left diagonal is valid and update maxFromLeft
    if (row - 1 >= n - col) maxFromLeft = fruits[row - 1][col - 1]
    // Check if moving from the left is valid and update maxFromLeft
    if (row >= n - col)
      maxFromLeft = Math.max(maxFromLeft, fruits[row][col - 1])
    // Check if moving from the bottom-left diagonal is valid and update maxFromLeft
    if (row + 1 >= n - col && row + 1 < n)
      maxFromLeft = Math.max(maxFromLeft, fruits[row + 1][col - 1])

    // Add the maximum value from the left paths to the current cell
    fruits[row][col] += maxFromLeft
  }

  // Update the left half of the DP table for each column up to half - 1
  for (let col = 1; col <= half - 1; col++)
    for (let row = n - 1; row >= n - col - 1; row--)
      updateFromLeftPaths(row, col)

  // Update the right half of the DP table for each column from half to n - 2
  for (let col = half; col <= n - 2; col++)
    for (let row = n - 1; row >= col + 1; row--) updateFromLeftPaths(row, col)

  // Add the value at the cell before the last column in the last row to totalSum
  totalSum += fruits[n - 1][n - 2]

  // Helper function to update fruits[i][j] from possible top paths
  const updateFromTopPaths = (row, col) => {
    let maxFromTop = 0

    // Check if moving from the top-left diagonal is valid and update maxFromTop
    if (col - 1 >= n - row) maxFromTop = fruits[row - 1][col - 1]
    // Check if moving from the top is valid and update maxFromTop
    if (col >= n - row) maxFromTop = Math.max(maxFromTop, fruits[row - 1][col])
    // Check if moving from the top-right diagonal is valid and update maxFromTop
    if (col + 1 >= n - row && col + 1 < n)
      maxFromTop = Math.max(maxFromTop, fruits[row - 1][col + 1])

    // Add the maximum value from the top paths to the current cell
    fruits[row][col] += maxFromTop
  }

  // Update the upper half of the DP table for each row up to half - 1
  for (let row = 1; row <= half - 1; row++)
    for (let col = n - 1; col >= n - row - 1; col--)
      updateFromTopPaths(row, col)

  // Update the lower half of the DP table for each row from half to n - 2
  for (let row = half; row <= n - 2; row++)
    for (let col = n - 1; col >= row + 1; col--) updateFromTopPaths(row, col)

  // Add the value at the cell before the last row in the last column to totalSum
  totalSum += fruits[n - 2][n - 1]

  // Return the total maximum fruits collected
  return totalSum
}
