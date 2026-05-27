/**
 * Problem: 3248. Snake in Matrix
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates final position of snake on n x n grid after commands
 *
 * @param {number} n - Size of the grid (n x n)
 * @param {string[]} commands - Array of movement commands
 *
 * @returns {number} Final position index (0-based)
 */
const finalPositionOfSnake = (n, commands) => {
  // Map each command to its displacement value
  const movementMap = { RIGHT: 1, LEFT: -1, DOWN: n, UP: -n }

  // Reduce commands array by summing displacements
  return commands.reduce(
    (currentPosition, command) => currentPosition + movementMap[command],
    0
  )
}
