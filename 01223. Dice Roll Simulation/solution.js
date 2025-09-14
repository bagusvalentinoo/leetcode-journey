/**
 * Problem: 1223. Dice Roll Simulation
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 56 ms (Beats 100%)
 */

/**
 * Simulates dice rolls with constraints
 *
 * @param {number} n - Number of rolls
 * @param {number[]} rollMax - Max consecutive rolls per face
 *
 * @returns {number} - Valid sequences count
 */
const dieSimulator = (n, rollMax) => {
  // Define the modulo constant for large numbers
  const MOD = 1e9 + 7

  // Initialize the DP table: dp[face][count] stores ways to end with 'face' rolled 'count' times consecutively
  let dp = Array.from({ length: 6 }, () => Array(16).fill(0))
  let newDp // Temporary DP table for next roll

  // Base case: For the first roll, each face can appear once
  for (let face = 0; face < 6; face++) dp[face][1] = 1

  // Iterate through each roll from 2 to n
  for (let roll = 2; roll <= n; roll++) {
    // Reset newDp for the current roll
    newDp = Array.from({ length: 6 }, () => Array(16).fill(0))

    // For each face and consecutive count
    for (let face = 0; face < 6; face++) {
      for (let count = 1; count <= rollMax[face]; count++) {
        // Skip if there are no sequences for this state
        if (dp[face][count] === 0) continue

        // If we can roll the same face again without exceeding rollMax
        if (count + 1 <= rollMax[face])
          newDp[face][count + 1] =
            (newDp[face][count + 1] + dp[face][count]) % MOD

        // Try switching to a different face
        for (let nextFace = 0; nextFace < 6; nextFace++) {
          if (nextFace === face) continue // Skip same face

          // Start a new sequence with nextFace
          newDp[nextFace][1] = (newDp[nextFace][1] + dp[face][count]) % MOD
        }
      }
    }

    // Update dp for the next iteration
    dp = newDp
  }

  // Sum up all valid sequences for all faces and counts
  let result = 0

  for (let face = 0; face < 6; face++)
    for (let count = 1; count <= rollMax[face]; count++)
      result = (result + dp[face][count]) % MOD

  // Return the total number of valid sequences
  return result
}
