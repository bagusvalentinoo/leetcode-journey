/**
 * Problem: 3360. Stone Removal Game
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if Alice can win the game by removing decreasing piles
 *
 * @param n - Initial number of stones
 *
 * @returns True if Alice wins, false otherwise
 */
const canAliceWin = (n: number): boolean => {
  // Counter for number of moves made
  let moveCount: number = 0
  // Starting pile size to remove
  let currentPile: number = 10

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
