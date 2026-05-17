/**
 * Problem: 3360. Stone Removal Game
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if Alice can win the game by removing decreasing piles
 *
 * @param {number} n - Initial number of stones
 *
 * @returns {boolean} True if Alice wins, false otherwise
 */
const canAliceWin = (n) => {
  // Counter for number of moves made
  let moveCount = 0
  // Starting pile size to remove
  let currentPile = 10

  // Continue while enough stones remain to remove current pile
  while (n >= currentPile) {
    // Remove current pile from total stones
    n -= currentPile
    // Decrease pile size for next move
    currentPile--
    // Increment move counter
    moveCount++
  }

  // Alice wins if number of moves is odd (Alice starts first)
  return moveCount % 2 !== 0
}
