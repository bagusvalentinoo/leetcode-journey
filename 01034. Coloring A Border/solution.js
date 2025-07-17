/**
 * Problem: 1034. Coloring A Border
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Colors the border of a connected component in a 2D grid
 *
 * @param {number[][]} grid - 2D grid of colors
 * @param {number} row - Starting row index
 * @param {number} col - Starting column index
 * @param {number} color - New border color
 *
 * @returns {number[][]} - Modified grid with colored border
 */
const colorBorder = (grid, row, col, color) => {
  // Get grid dimensions: n = number of rows, m = number of columns
  const n = grid.length,
    m = grid[0].length

  // Create a visited set to track processed cells using unique identifiers
  const vis = new Set()

  // Initialize BFS queue with the starting position
  const queue = [[row, col]]
  // Store the original color of the starting cell
  const curColor = grid[row][col]

  // Mark the starting cell as visited using row*m + col as unique identifier
  vis.add(row * m + col)

  // Direction vectors for 4-directional movement: up, right, down, left
  const dr = [-1, 0, 1, 0],
    dc = [0, 1, 0, -1]

  // BFS to find all connected cells with the same color
  while (queue.length !== 0) {
    // Dequeue the current cell from the front of the queue
    const [curRow, curCol] = queue.shift()

    // Check all 4 adjacent directions
    for (let i = 0; i < 4; i++) {
      // Calculate adjacent cell coordinates
      const adjRow = curRow + dr[i],
        adjCol = curCol + dc[i]

      // Check if adjacent cell is valid and should be processed
      if (
        adjRow >= 0 && // Not above grid boundary
        adjCol >= 0 && // Not left of grid boundary
        adjRow < n && // Not below grid boundary
        adjCol < m && // Not right of grid boundary
        !vis.has(adjRow * m + adjCol) && // Not already visited
        grid[adjRow][adjCol] === curColor // Has same color as original
      ) {
        // Add valid adjacent cell to queue for processing
        queue.push([adjRow, adjCol])
        // Mark adjacent cell as visited
        vis.add(adjRow * m + adjCol)
      }
    }
  }

  // Array to store border cells that need to be colored
  const borders = []

  // Iterate through all visited cells to identify border cells
  for (const elem of vis) {
    // Convert unique identifier back to row and column coordinates
    const row = Math.floor(elem / m)
    const col = elem - row * m

    // Counter for adjacent cells with the same color
    let cnt = 0

    // Check all 4 directions from current cell
    for (let i = 0; i < 4; i++) {
      // Calculate adjacent cell coordinates
      const adjRow = row + dr[i],
        adjCol = col + dc[i]

      // Count adjacent cells that are within bounds and have same color
      if (
        adjRow >= 0 && // Not above grid boundary
        adjCol >= 0 && // Not left of grid boundary
        adjRow < n && // Not below grid boundary
        adjCol < m && // Not right of grid boundary
        grid[adjRow][adjCol] === curColor // Has same color
      )
        cnt++
    }

    // If cell has fewer than 4 same-color neighbors, it's a border cell
    if (cnt < 4) borders.push(row * m + col)
  }

  // Color all identified border cells with the new color
  for (const elem of borders) {
    // Convert unique identifier back to row and column coordinates
    const row = Math.floor(elem / m)
    const col = elem - row * m

    // Update the grid cell with the new border color
    grid[row][col] = color
  }

  // Return the modified grid with colored borders
  return grid
}
