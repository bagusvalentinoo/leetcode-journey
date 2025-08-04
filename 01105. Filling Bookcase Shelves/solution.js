/**
 * Problem: 1105. Filling Bookcase Shelves
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum height to arrange books on shelves of given width
 *
 * @param {number[][]} books - Each book as [thickness, height]
 * @param {number} shelfWidth - Shelf width limit
 *
 * @returns {number} - Minimum total shelf height
 */
const minHeightShelves = (books, shelfWidth) => {
  // Get the number of books
  const n = books.length

  // Initialize dp array where dp[i] represents the minimum height to place first i books
  const dp = new Array(n + 1).fill(Infinity)

  // Base case: no books means zero height
  dp[0] = 0

  // Iterate through each book position
  for (let i = 1; i <= n; i++) {
    // Initialize current shelf width and max height for this shelf
    let currentShelfWidth = 0,
      currentShelfMaxHeight = 0

    // Try to place books[j] to books[i-1] on the same shelf
    for (let j = i - 1; j >= 0; j--) {
      // Add the thickness of books[j] to current shelf width
      currentShelfWidth += books[j][0]

      // If shelf width exceeds the limit, stop adding more books to this shelf
      if (currentShelfWidth > shelfWidth) break

      // Update the maximum height of the current shelf
      currentShelfMaxHeight = Math.max(currentShelfMaxHeight, books[j][1])

      // Update dp[i] with the minimum height by placing books[j] to books[i-1] on the same shelf
      dp[i] = Math.min(dp[i], dp[j] + currentShelfMaxHeight)
    }
  }

  // Return the minimum height needed to place all books
  return dp[n]
}
