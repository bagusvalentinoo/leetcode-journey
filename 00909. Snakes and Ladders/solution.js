/**
 * Problem: 909. Snakes and Ladders
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 99.72%)
 */

/**
 * Finds the minimum number of dice rolls required to reach the final square
 *
 * @param {number[][]} board - n x n board with snakes and ladders
 *
 * @returns {number} - Minimum number of dice rolls required, or -1 if not possible
 */
const snakesAndLadders = (board) => {
  const m = board.length // Number of rows
  const n = board[0].length // Number of columns
  const boardLength = m * n // Total number of squares
  const flattened = new Array(boardLength + 1).fill(0) // Flattened board

  let flattenedIdx = 1
  board.reverse() // Reverse the board

  // Flatten the board
  for (let i = 0; i < m; i++) {
    // Iterate through rows
    for (let j = 0; j < n; j++) {
      // Iterate through columns
      if (i % 2 === 0) flattened[flattenedIdx] = board[i][j]
      // For odd rows, fill from right to left
      else flattened[flattenedIdx] = board[i][n - 1 - j]

      // Move to the next flattened index
      flattenedIdx++
    }
  }

  // Initialize BFS
  let queue = [1]
  let rolls = 0
  const seen = new Array(boardLength + 1).fill(false)
  seen[1] = true

  // Perform BFS
  while (queue.length) {
    const nextQueue = []

    // Iterate through the current queue
    for (const position of queue) {
      // Iterate through possible dice rolls
      for (let roll = 1; roll < 7; roll++) {
        const nextPosition = position + roll

        // Check if the next position has been seen
        if (!seen[nextPosition]) {
          seen[nextPosition] = true

          // Check if the next position is the final square
          if (
            nextPosition === boardLength ||
            flattened[nextPosition] === boardLength
          )
            return rolls + 1

          // Check if the next position is a snake or ladder
          if (flattened[nextPosition] !== -1)
            nextQueue.push(flattened[nextPosition])
          // If not, add the next position to the queue
          else nextQueue.push(nextPosition)
        }
      }
    }

    // Move to the next queue
    queue = nextQueue
    rolls++
  }

  // Return -1 if not possible
  return -1
}
