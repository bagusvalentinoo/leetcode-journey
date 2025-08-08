/**
 * Problem: 808. Soup Servings
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Returns the probability that soup A empties first, plus half if both empty together
 *
 * @param {number} n - Initial soup volume in milliliters
 *
 * @returns {number} - Probability as a float
 */
const soupServings = (n) => {
  // Depth-first search helper function with memoization
  // accA: remaining amount of soup A (in 25ml units)
  // accB: remaining amount of soup B (in 25ml units)
  const dfs = (accA, accB) => {
    // If both soups run out at the same time, return 0.5 probability
    if (accA <= 0 && accB <= 0) return 0.5
    // If soup A runs out first, return 1 probability
    if (accA <= 0) return 1
    // If soup B runs out first, return 0 probability
    if (accB <= 0) return 0
    // Return cached result if already computed
    if (memo[accA][accB]) return memo[accA][accB]

    // Recursively calculate probability for each serving operation
    const probA = dfs(accA - 4, accB) // Serve 100ml from A, 0ml from B
    const probB = dfs(accA - 3, accB - 1) // Serve 75ml from A, 25ml from B
    const probC = dfs(accA - 2, accB - 2) // Serve 50ml from A, 50ml from B
    const probD = dfs(accA - 1, accB - 3) // Serve 25ml from A, 75ml from B

    // Average the probabilities and store in memoization table
    return (memo[accA][accB] = 0.25 * (probA + probB + probC + probD))
  }

  // For large n, the probability approaches 1, so return 1 directly for efficiency
  if (n > 4300) return 1

  // Convert n from milliliters to units of 25ml, rounding up
  n = Math.ceil(n / 25)

  // Initialize memoization table with Float32Array for performance and memory efficiency
  const memo = Array.from({ length: n + 1 }, () => new Float32Array(n + 1))

  // Start the recursive search with both soups full
  return dfs(n, n)
}
