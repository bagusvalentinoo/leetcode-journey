/**
 * Problem: 1240. Tiling a Rectangle with the Fewest Squares
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

/**
 * Finds the minimum number of squares to tile an n x m rectangle
 *
 * @param {number} n - Rectangle height
 * @param {number} m - Rectangle width
 *
 * @returns {number} - Minimum number of squares needed
 */
const tilingRectangle = (n, m) => {
  // If the rectangle is already a square, only one square is needed
  if (n === m) return 1

  // Initialize the best (minimum) number of squares as the area (worst case: all 1x1 squares)
  let best = n * m

  /**
   * Depth-first search helper to try all possible tilings
   * @param {number[]} heights - Current heights of each column in the rectangle
   * @param {number} used - Number of squares used so far
   */
  const dfs = (heights, used) => {
    // Prune search if current used squares already exceed the best found
    if (used >= best) return

    // Find the minimum height among all columns (lowest row to fill)
    const minHeight = Math.min(...heights)

    // If all columns are filled up to n, update the best result
    if (minHeight === n) {
      best = Math.min(best, used)
      return
    }

    // Find the leftmost column with the minimum height
    const leftIdx = heights.indexOf(minHeight)
    // Determine the largest possible square size that can be placed at this position
    const maxSquareSize = Math.min(n - minHeight, m - leftIdx)

    // Try placing squares from largest possible size down to 1
    for (let size = maxSquareSize; size >= 1; size--) {
      let canPlace = true

      // Check if a square of this size can be placed (all columns must have the same min height)
      for (let j = leftIdx; j < leftIdx + size; j++) {
        if (heights[j] !== minHeight) {
          canPlace = false
          break
        }
      }

      // Skip if square can't be placed
      if (!canPlace) continue

      // Create a new heights array to reflect placing the square
      const newHeights = [...heights]

      // Update the heights for the columns covered by the new square
      for (let j = leftIdx; j < leftIdx + size; j++) newHeights[j] += size

      // Recurse with the updated heights and incremented used count
      dfs(newHeights, used + 1)
    }
  }

  // Start DFS with all columns at height 0 and 0 squares used
  dfs(new Array(m).fill(0), 0)

  // Return the minimum number of squares found
  return best
}
