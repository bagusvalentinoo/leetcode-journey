/**
 * Problem: 3459. Length of Longest V-Shaped Diagonal Segment
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 186 ms (Beats 100%)
 */

/**
 * Finds the longest alternating V-shaped diagonal in a grid
 *
 * @param {number[][]} grid - 2D array of 1s and 2s
 *
 * @returns {number} - Length of the longest V-shaped diagonal
 */
const lenOfVDiagonal = (grid) => {
  // Directions for diagonal movement: [down-right], [down-left], [up-left], [up-right]
  const DIRS = [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1]
  ]

  // Get grid dimensions
  const rowCount = grid.length,
    colCount = grid[0].length

  // Memoization array to cache results for each state (flattened 3D: row, col, direction, turn)
  const memo = new Array(rowCount * colCount * 8).fill(-1)

  // Depth-first search to find the length of V-shaped diagonal
  const dfs = (currRow, currCol, direction, canTurn, targetValue) => {
    // Calculate next cell coordinates based on direction
    const nextRow = currRow + DIRS[direction][0],
      nextCol = currCol + DIRS[direction][1]

    // Check bounds and value match
    if (
      nextRow < 0 ||
      nextCol < 0 ||
      nextRow >= rowCount ||
      nextCol >= colCount ||
      grid[nextRow][nextCol] !== targetValue
    )
      return 0

    // Encode turn as integer for memoization index
    const turnInt = canTurn ? 1 : 0
    // Calculate unique index for memoization
    const memoIndex =
      nextRow * colCount * 8 + nextCol * 8 + direction * 2 + turnInt

    // Return cached result if available
    if (memo[memoIndex] !== -1) return memo[memoIndex]

    // Continue in the same direction, alternating value
    let maxStep = dfs(nextRow, nextCol, direction, canTurn, 2 - targetValue)

    // If turn is allowed, try turning to the next direction
    if (canTurn)
      maxStep = Math.max(
        maxStep,
        dfs(nextRow, nextCol, (direction + 1) % 4, false, 2 - targetValue)
      )

    // Cache result for current state
    memo[memoIndex] = maxStep + 1

    return maxStep + 1
  }

  // Variable to store the maximum V-shaped diagonal length found
  let maxLength = 0

  // Iterate over every cell in the grid
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      // Start DFS from cells with value 1
      if (grid[row][col] === 1) {
        for (let direction = 0; direction < 4; direction++)
          maxLength = Math.max(maxLength, dfs(row, col, direction, true, 2) + 1)
      }
    }
  }

  // Return the length of the longest V-shaped diagonal found
  return maxLength
}
