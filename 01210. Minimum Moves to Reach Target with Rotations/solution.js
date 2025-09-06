/**
 * Problem: 1210. Minimum Moves to Reach Target with Rotations
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 74 ms (Beats 100%)
 */

/**
 * Finds the minimum moves to reach the target in the grid
 *
 * @param {number[][]} grid - The input grid
 *
 * @returns {number} - Minimum moves or -1 if unreachable
 */
const minimumMoves = (grid) => {
  // Get the size of the grid
  const gridSize = grid.length

  // Define the target position and orientation [row, col, orientation]
  // The target is at the bottom row, one column before the end, horizontal orientation
  const targetState = [gridSize - 1, gridSize - 2, 0]

  // Initialize the BFS queue with the starting position [row, col, orientation, steps]
  // Start at (0, 0), horizontal orientation (0), with 0 steps taken
  const bfsQueue = [[0, 0, 0, 0]]

  // Use a Set to keep track of visited states to avoid revisiting
  // Store as "row,col,orientation"
  const visitedStates = new Set(['0,0,0'])

  // Perform BFS until the queue is empty
  while (bfsQueue.length > 0) {
    // Dequeue the next state to process
    const [row, col, orientation, steps] = bfsQueue.shift()

    // Check if the current state matches the target state
    if (
      row === targetState[0] &&
      col === targetState[1] &&
      orientation === targetState[2]
    )
      return steps

    // If the snake is in horizontal orientation
    if (orientation === 0) {
      // Try moving right if the next two cells are within bounds and empty
      if (col + 2 < gridSize && grid[row][col + 2] === 0) {
        const nextKey = `${row},${col + 1},0`

        // If this state hasn't been visited, add to queue and mark as visited
        if (!visitedStates.has(nextKey)) {
          visitedStates.add(nextKey)
          bfsQueue.push([row, col + 1, 0, steps + 1])
        }
      }

      // Try moving down if both cells below are empty and within bounds
      if (
        row + 1 < gridSize &&
        grid[row + 1][col] === 0 &&
        grid[row + 1][col + 1] === 0
      ) {
        const nextKeyDown = `${row + 1},${col},0`

        // If this state hasn't been visited, add to queue and mark as visited
        if (!visitedStates.has(nextKeyDown)) {
          visitedStates.add(nextKeyDown)
          bfsQueue.push([row + 1, col, 0, steps + 1])
        }

        // Try rotating to vertical orientation if possible
        const nextKeyRotate = `${row},${col},1`

        // If this state hasn't been visited, add to queue and mark as visited
        if (!visitedStates.has(nextKeyRotate)) {
          visitedStates.add(nextKeyRotate)
          bfsQueue.push([row, col, 1, steps + 1])
        }
      }
    }
    // If the snake is in vertical orientation
    else {
      // Try moving down if the next two cells are within bounds and empty
      if (row + 2 < gridSize && grid[row + 2][col] === 0) {
        const nextKey = `${row + 1},${col},1`

        // If this state hasn't been visited, add to queue and mark as visited
        if (!visitedStates.has(nextKey)) {
          visitedStates.add(nextKey)
          bfsQueue.push([row + 1, col, 1, steps + 1])
        }
      }

      // Try moving right if both cells to the right are empty and within bounds
      if (
        col + 1 < gridSize &&
        grid[row][col + 1] === 0 &&
        grid[row + 1][col + 1] === 0
      ) {
        const nextKeyRight = `${row},${col + 1},1`

        // If this state hasn't been visited, add to queue and mark as visited
        if (!visitedStates.has(nextKeyRight)) {
          visitedStates.add(nextKeyRight)
          bfsQueue.push([row, col + 1, 1, steps + 1])
        }

        // Try rotating to horizontal orientation if possible
        const nextKeyRotate = `${row},${col},0`

        // If this state hasn't been visited, add to queue and mark as visited
        if (!visitedStates.has(nextKeyRotate)) {
          visitedStates.add(nextKeyRotate)
          bfsQueue.push([row, col, 0, steps + 1])
        }
      }
    }
  }

  // If the target is unreachable, return -1
  return -1
}
