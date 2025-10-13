/**
 * Problem: 1269. Number of Ways to Stay in the Same Place After Some Steps
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 11 ms (Beats 100%)
 */

/**
 * Returns ways to stay at index 0 after given steps
 *
 * @param {number} steps - Number of steps
 * @param {number} arrLen - Array length
 *
 * @returns {number} - Ways to stay at index 0
 */
const numWays = (steps, arrLen) => {
  // Define the modulo constant to prevent integer overflow in calculations
  const MOD = 10 ** 9 + 7

  // Calculate the furthest index we need to consider, limited by array length and steps
  const maxReachableIndex = Math.min(arrLen, Math.floor(steps / 2) + 1)

  // Initialize the dynamic programming array to store ways to reach each index
  let waysToReach = Array(maxReachableIndex).fill(0)

  // There is one way to start at index 0 (no moves yet)
  waysToReach[0] = 1

  // Iterate through each step from 1 to the total number of steps
  for (let currentStep = 1; currentStep <= steps; currentStep++) {
    // Prepare a new array to store ways for the current step
    const nextWays = Array(maxReachableIndex).fill(0)

    // For each index within the reachable range
    for (let idx = 0; idx < maxReachableIndex; idx++) {
      // Start with the ways to stay at the same index
      nextWays[idx] = waysToReach[idx]

      // Add ways to come from the previous index if possible
      if (idx > 0) nextWays[idx] = (nextWays[idx] + waysToReach[idx - 1]) % MOD

      // Add ways to come from the next index if possible
      if (idx + 1 < maxReachableIndex)
        nextWays[idx] = (nextWays[idx] + waysToReach[idx + 1]) % MOD
    }

    // Update the ways array for the next iteration
    waysToReach = nextWays
  }

  // Return the number of ways to stay at index 0 after all steps
  return waysToReach[0]
}
