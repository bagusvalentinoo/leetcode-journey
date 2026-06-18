/**
 * Problem: 1359. Count All Valid Pickup and Delivery Options
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countOrders(n int) int {
	// Modulo constant to prevent integer overflow
	const MOD = 1000000007

	// Initialize result to 1 (first order has only 1 way)
	totalWays := 1

	// For each additional order, multiply by number of ways to insert it
	// Formula: (2n-1) * n where:
	//   - (2n-1) = positions to place the pickup relative to previous orders
	//   - n = positions to place the delivery after its pickup
	for orderNumber := 2; orderNumber <= n; orderNumber++ {
		totalWays = (totalWays * (2*orderNumber - 1) * orderNumber) % MOD
	}

	// Return the total number of valid sequences
	return totalWays
}
