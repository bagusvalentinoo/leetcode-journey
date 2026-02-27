/**
 * Problem: 1301. Number of Paths with Max Score
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 71 ms (Beats 100%)
 */

/**
 * Calculates paths with maximum score in a grid from bottom-right to top-left
 *
 * @param {string[]} board - Grid with 'X' (obstacle), 'E' (end), or digit (score)
 *
 * @returns {number[]} [maxScore, numberOfPaths] modulo 1e9+7
 */
const pathsWithMaxScore = (board) => {
  // Modulo constant for results
  const MOD = 1e9 + 7
  // Get grid size
  const size = board.length

  // DP arrays for maximum score and number of paths
  const maxScore = Array.from({ length: size }, () => Array(size).fill(0)),
    pathCount = Array.from({ length: size }, () => Array(size).fill(0))

  // Starting position (bottom-right) has one path
  pathCount[size - 1][size - 1] = 1

  // Process grid from bottom-right to top-left
  for (let row = size - 1; row >= 0; row--) {
    for (let col = size - 1; col >= 0; col--) {
      // Skip obstacles or cells with no paths to them
      if (board[row][col] !== 'X' && pathCount[row][col] !== 0) {
        // Check three possible previous directions: up, left, and up-left
        for (const [dx, dy] of [
          [1, 0],
          [0, 1],
          [1, 1]
        ]) {
          // Calculate previous row and column
          const prevRow = row - dx,
            prevCol = col - dy

          // Check if previous cell is within bounds and not an obstacle
          if (prevRow >= 0 && prevCol >= 0 && board[prevRow][prevCol] !== 'X') {
            // Get score of previous cell (0 for 'E' cell)
            const cellScore =
              board[prevRow][prevCol] === 'E'
                ? 0
                : parseInt(board[prevRow][prevCol])

            // Calculate new total score
            const newScore = (maxScore[row][col] + cellScore) % MOD

            // Update if new score is better
            if (newScore > maxScore[prevRow][prevCol]) {
              maxScore[prevRow][prevCol] = newScore
              pathCount[prevRow][prevCol] = pathCount[row][col]
            }
            // If equal score, add path counts
            else if (newScore === maxScore[prevRow][prevCol])
              pathCount[prevRow][prevCol] =
                (pathCount[prevRow][prevCol] + pathCount[row][col]) % MOD
          }
        }
      }
    }
  }

  // Return max score and path count at top-left
  return [maxScore[0][0], pathCount[0][0]]
}
