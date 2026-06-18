/**
 * Problem: 1359. Count All Valid Pickup and Delivery Options
 *
 * Difficulty: Hard
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of valid sequences for n orders (pickup and delivery)
 *
 * @param n - Number of orders
 *
 * @returns Number of valid sequences modulo 1e9+7
 */
const countOrders = (n: number): number => {
  // Modulo constant to prevent integer overflow
  const MOD: number = 1000000007

  // Initialize result to 1 (first order has only 1 way)
  let totalWays: number = 1

  // For each additional order, multiply by number of ways to insert it
  // Formula: (2n-1) * n where:
  //   - (2n-1) = positions to place the pickup relative to previous orders
  //   - n = positions to place the delivery after its pickup
  for (let orderNumber: number = 2; orderNumber <= n; orderNumber++)
    totalWays = (totalWays * (2 * orderNumber - 1) * orderNumber) % MOD

  // Return the total number of valid sequences
  return totalWays
}
