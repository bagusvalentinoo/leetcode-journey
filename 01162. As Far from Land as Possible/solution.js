/**
 * Problem: 1162. As Far from Land as Possible
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 31 ms (Beats 100%)
 */

/**
 * Finds the maximum distance from a water cell (0) to the nearest land cell (1) in a grid
 *
 * @param {number[][]} grid - 2D array of 0s and 1s
 *
 * @returns {number} - Maximum distance or -1 if not possible
 */
const maxDistance = (grid) => {
  // Initialize a queue to perform BFS traversal
  const queue = []
  // Flag to check if there is at least one water cell in the grid
  let containsZero = false

  // Iterate through each cell in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      // If the cell is land, add its coordinates and distance 0 to the queue
      if (grid[row][column] === 1) queue.push([row, column, 0])
      // If the cell is water, set the flag to true
      else containsZero = true
    }
  }

  // If there is no land or no water, return -1 as it's not possible to find a distance
  if (queue.length === 0 || !containsZero) return -1

  // Variable to keep track of the maximum distance found
  let maxDistance = -1
  // Array representing the four possible directions (right, left, down, up)
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0] // up
  ]

  // Perform BFS traversal
  while (queue.length > 0) {
    // Remove the first cell from the queue
    const cell = queue.shift()
    // Update the maximum distance found so far
    maxDistance = Math.max(maxDistance, cell[2])

    // Explore all four directions from the current cell
    for (let i = 0; i < directions.length; i++) {
      // Calculate the new coordinates
      const newRow = directions[i][0] + cell[0],
        newColumn = directions[i][1] + cell[1]

      // Check if the new coordinates are within bounds and the cell is water
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newColumn >= 0 &&
        newColumn < grid[0].length &&
        grid[newRow][newColumn] === 0
      ) {
        // Add the new cell to the queue with incremented distance
        queue.push([newRow, newColumn, cell[2] + 1])
        // Mark the cell as visited by setting it to land
        grid[newRow][newColumn] = 1
      }
    }
  }

  // Return the maximum distance found
  return maxDistance
}
