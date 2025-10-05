/**
 * Problem: 417. Pacific Atlantic Water Flow
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Finds coordinates that can flow to both oceans
 *
 * @param {number[][]} heights - Height matrix
 *
 * @returns {number[][]} - Coordinates flowing to both oceans
 */
const pacificAtlantic = (heights) => {
  // Stores coordinates that can flow to both oceans
  const coordinates = []

  // Get the number of rows in the heights matrix
  const rowCount = heights.length
  // Get the number of columns in the heights matrix
  const colCount = heights[0].length

  // Create a flat array to track visited states for each cell
  const visited = new Uint8Array(colCount * rowCount)

  // Depth-first search to mark cells reachable from a given ocean
  const dfs = (row, col, oceanFlag, prevHeight) => {
    // Calculate flat index for visited array
    const index = row * colCount + col

    // Return if already visited for this ocean or height is decreasing
    if (visited[index] & oceanFlag || heights[row][col] < prevHeight) return

    // Mark cell as visited for this ocean
    visited[index] += oceanFlag

    // If cell is reachable from both oceans, add to result
    if (visited[index] === 3) coordinates.push([row, col])

    // Explore upward neighbor if within bounds
    if (row >= 1) dfs(row - 1, col, oceanFlag, heights[row][col])
    // Explore left neighbor if within bounds
    if (col >= 1) dfs(row, col - 1, oceanFlag, heights[row][col])
    // Explore downward neighbor if within bounds
    if (row < rowCount - 1) dfs(row + 1, col, oceanFlag, heights[row][col])
    // Explore right neighbor if within bounds
    if (col < colCount - 1) dfs(row, col + 1, oceanFlag, heights[row][col])
  }

  // Start DFS from all cells adjacent to Pacific and Atlantic oceans (left/right edges)
  for (let row = 0; row < rowCount; row++) {
    dfs(row, 0, 1, heights[row][0]) // Pacific edge
    dfs(row, colCount - 1, 2, heights[row][colCount - 1]) // Atlantic edge
  }

  // Start DFS from all cells adjacent to Pacific and Atlantic oceans (top/bottom edges)
  for (let col = 0; col < colCount; col++) {
    dfs(0, col, 1, heights[0][col]) // Pacific edge
    dfs(rowCount - 1, col, 2, heights[rowCount - 1][col]) // Atlantic edge
  }

  // Return all coordinates that can flow to both oceans
  return coordinates
}
