/**
 * Problem: 1267. Count Servers that Communicate
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Counts servers that can communicate in a grid
 *
 * @param {number[][]} grid - 2D array representing servers
 *
 * @returns {number} - Number of communicating servers
 */
const countServers = (grid) => {
  // Get the number of rows and columns in the grid
  const rowCount = grid.length,
    colCount = grid[0].length

  // Initialize an array to count servers in each row and column
  const serversPerRow = new Array(rowCount).fill(0),
    serversPerCol = new Array(colCount).fill(0)

  // Initialize the result to store the count of communicating servers
  let communicatingServers = 0

  // Iterate through each cell in the grid
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      // If there is a server at the current cell, increment row and column counters
      if (grid[row][col] === 1) {
        serversPerRow[row] += 1
        serversPerCol[col] += 1
      }
    }
  }

  // Iterate again to count servers that can communicate
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      // If there is a server and it shares its row or column with another server, increment result
      if (
        grid[row][col] &&
        (serversPerRow[row] > 1 || serversPerCol[col] > 1)
      ) {
        communicatingServers += 1
      }
    }
  }

  // Return the total number of communicating servers
  return communicatingServers
}
