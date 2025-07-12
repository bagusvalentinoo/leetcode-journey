/**
 * Problem: 1900. The Earliest and Latest Rounds Where Players Compete
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Find earliest and latest rounds two players can meet in knockout tournament
 *
 * @param {number} n - Total players
 * @param {number} firstPlayer - First player index
 * @param {number} secondPlayer - Second player index
 *
 * @returns {number[]} - [earliest round, latest round]
 */
const earliestAndLatest = (n, firstPlayer, secondPlayer) => {
  // Store the smaller and larger player indices for easier calculation
  let left = Math.min(firstPlayer, secondPlayer),
    right = Math.max(firstPlayer, secondPlayer)

  // Base case: if players are directly opposite each other, they meet in round 1
  if (left + right === n + 1) return [1, 1]

  // Base case: for small tournaments (3-4 players), they always meet in round 2
  if (n === 3 || n === 4) return [2, 2]

  // Optimization: if left side has more players than right side, swap to balance
  // This ensures we always work with the smaller half for efficiency
  if (left - 1 > n - right) {
    const temp = n + 1 - left

    left = n + 1 - right
    right = temp
  }

  // Calculate the number of players in the next round (half of current round)
  const nextRound = (n + 1) >> 1

  // Array to store all possible [earliest, latest] results from recursive calls
  const results = []

  // Case 1: Both players are in the first half of the bracket
  if (right * 2 <= n + 1) {
    // Count players before the left player
    const preLeft = left - 1

    // Count players between left and right players
    const midGap = right - left - 1

    // Try all possible combinations of players advancing from different segments
    for (let i = 0; i <= preLeft; i++) {
      for (let j = 0; j <= midGap; j++) {
        // Recursively calculate for the next round with new positions
        const [minRes, maxRes] = earliestAndLatest(nextRound, i + 1, i + j + 2)

        // Add 1 to account for the current round
        results.push([1 + minRes, 1 + maxRes])
      }
    }
  } else {
    // Case 2: Players are in different halves of the bracket

    // Mirror position of right player from the end
    const mirrored = n + 1 - right

    // Count players before the left player
    const preLeft = left - 1

    // Count players between left and mirrored position
    const midGap = mirrored - left - 1

    // Count players between mirrored position and right player
    const innerGap = right - mirrored - 1

    // Try all possible combinations considering cross-bracket scenarios
    for (let i = 0; i <= preLeft; i++) {
      for (let j = 0; j <= midGap; j++) {
        // Calculate second player's position in next round considering bracket structure
        const second = i + j + 1 + ((innerGap + 1) >> 1) + 1

        // Recursively calculate for the next round
        const [minRes, maxRes] = earliestAndLatest(nextRound, i + 1, second)

        // Add 1 to account for the current round
        results.push([1 + minRes, 1 + maxRes])
      }
    }
  }

  // Return the minimum earliest round and maximum latest round from all possibilities
  return [
    results.reduce((min, [a]) => Math.min(min, a), n),
    results.reduce((max, [, b]) => Math.max(max, b), 1)
  ]
}
