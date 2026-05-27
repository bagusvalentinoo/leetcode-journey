/**
 * Problem: 3248. Snake in Matrix
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates final position of snake on n x n grid after commands
 *
 * @param n - Size of the grid (n x n)
 * @param commands - Array of movement commands
 *
 * @returns Final position index (0-based)
 */
const finalPositionOfSnake = (n: number, commands: string[]): number => {
  // Initialize snake's starting position at top-left corner (row 0, col 0)
  let row: number = 0,
    col: number = 0

  // Process each command in sequence
  for (let i = 0; i < commands.length; i++) {
    // Move up: decrease row index
    if (commands[i] === 'UP') row--
    // Move right: increase column index
    else if (commands[i] === 'RIGHT') col++
    // Move down: increase row index
    else if (commands[i] === 'DOWN') row++
    // Move left: decrease column index
    else if (commands[i] === 'LEFT') col--
  }

  // Convert (row, col) to linear index: row * n + col
  return row * n + col
}
