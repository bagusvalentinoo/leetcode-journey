/**
 * Problem: 909. Snakes and Ladders
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Finds minimum dice rolls to reach the final square in Snakes and Ladders
 *
 * @param {number[][]} board - n x n board representation
 *
 * @returns {number} - Minimum rolls required or -1 if impossible
 */
const snakesAndLadders = (board) => {
  // Initialize queue with starting position
  const queue = [1]
  // Get board size
  const boardSize = board[0].length
  // Calculate final destination square
  const finalSquare = boardSize * boardSize

  // Track number of dice rolls
  let rolls = 0

  while (queue.length) {
    // Get current level size
    let levelSize = queue.length
    rolls++

    while (levelSize > 0) {
      // Get current position
      const currentPos = queue.shift()

      for (let step = 1; step <= 6; step++) {
        // Calculate next position after dice roll
        let nextPos = currentPos + step

        // Skip if next position is beyond the board
        if (nextPos > finalSquare) continue

        // Convert 1D position to 2D board coordinates
        const row = Math.floor((nextPos - 1) / boardSize)
        const col = (nextPos - 1) % boardSize
        // Account for zigzag board pattern
        const physicalRow = boardSize - 1 - row
        const physicalCol = row % 2 === 0 ? col : boardSize - 1 - col
        // Get value at the destination square
        const squareValue = board[physicalRow][physicalCol]

        // Skip if square is already visited
        if (squareValue === 0) continue
        // If there's a snake or ladder, update position
        if (squareValue > 0) nextPos = squareValue
        // Return rolls if reached final square
        if (nextPos === finalSquare) return rolls

        // Add next position to queue
        queue.push(nextPos)
        // Mark square as visited
        board[physicalRow][physicalCol] = 0
      }

      levelSize--
    }
  }

  // Return -1 if impossible to reach the final square
  return -1
}
