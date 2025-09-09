/**
 * Problem: 2327. Number of People Aware of a Secret
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func peopleAwareOfSecret(n int, delay int, forget int) int {
	// Define the modulo constant for large number calculations
	const MOD int64 = 1_000_000_007

	// If there is only one day, only one person knows the secret
	if n == 1 {
		return 1
	}

	// dp[i] represents the number of people who learn the secret on day i
	dp := make([]int64, n+1)
	dp[1] = 1 // On day 1, one person knows the secret

	// window keeps track of the number of people who can share the secret on day i
	var window int64

	// Iterate over each day from 2 to n
	for day := 2; day <= n; day++ {
		// Calculate the day when people start sharing the secret
		shareStartDay := day - delay
		// Calculate the day when people forget the secret
		forgetDay := day - forget

		// If someone can start sharing, add them to the window
		if shareStartDay >= 1 {
			window = (window + dp[shareStartDay]) % MOD
		}
		// If someone forgets the secret, remove them from the window
		if forgetDay >= 1 {
			window = (window - dp[forgetDay] + MOD) % MOD
		}

		// Set the number of people who learn the secret on this day
		dp[day] = window
	}

	// Calculate the total number of people who still remember the secret at the end
	var totalAware int64
	// The earliest day someone can still remember the secret
	earliestAwareDay := n - forget + 1

	// Ensure the start day is at least 1
	if earliestAwareDay < 1 {
		earliestAwareDay = 1
	}

	// Sum up all people who still remember the secret from earliestAwareDay to n
	for day := earliestAwareDay; day <= n; day++ {
		totalAware = (totalAware + dp[day]) % MOD
	}

	// Return the total number of people aware of the secret
	return int(totalAware)
}
