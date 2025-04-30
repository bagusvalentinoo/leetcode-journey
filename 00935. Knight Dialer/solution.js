/**
 * Problem: 935. Knight Dialer
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 42 ms (Beats 100%)
 */

/**
 * Count distinct phone numbers of length n that can be dialed by a chess knight
 *
 * @param {number} n - Phone number length
 *
 * @returns {number} Number of distinct phone numbers (mod 10^9 + 7)
 */
const knightDialer = (n) => {
  // Define the modulo constant
  const MOD = 1e9 + 7

  // Define the knight's moves from each digit
  const moves = {
    0: [4, 6], // 4 -> [0, 3, 9]
    1: [6, 8], // 6 -> [1, 7]
    2: [7, 9], // 7 -> [2, 6]
    3: [4, 8], // 4 -> [3, 9]
    4: [0, 3, 9], // 3 -> [4, 8]
    5: [], // 5 -> []
    6: [0, 1, 7], // 1 -> [6, 8]
    7: [2, 6], // 2 -> [7, 9]
    8: [1, 3], // 1 -> [6, 8]
    9: [2, 4] // 2 -> [7, 9]
  }

  // Initialize the previous and current counts
  let prev = new Array(10).fill(1)
  let curr = new Array(10).fill(0)

  // Iterate through the number of steps
  for (let step = 2; step <= n; step++) {
    // Iterate through each digit
    for (let digit = 0; digit <= 9; digit++) {
      curr[digit] = 0 // Reset current count for the digit

      // Iterate through each possible move from the digit
      for (const neighbor of moves[digit])
        curr[digit] = (curr[digit] + prev[neighbor]) % MOD
    }

    // Swap previous and current counts for the next iteration
    ;[prev, curr] = [curr, prev]
  }

  // Return the total count of distinct phone numbers modulo MOD
  return prev.reduce((sum, count) => (sum + count) % MOD, 0)
}
