/**
 * Problem: 2327. Number of People Aware of a Secret
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Calculates the number of people aware of a secret after n days
 *
 * @param {number} n - Total days
 * @param {number} delay - Days before sharing
 * @param {number} forget - Days before forgetting
 *
 * @returns {number} - People aware of the secret
 */
const peopleAwareOfSecret = (n, delay, forget) => {
  // Define the modulo constant for large number calculations
  const MOD = 1e9 + 7

  // Initialize dynamic programming array to track new sharers each day
  const dp = new Array(n + 1).fill(0)

  // On day 1, one person knows the secret
  dp[1] = 1

  // Tracks the number of people who can share the secret on the current day
  let shareCount = 0

  // Tracks the total number of people aware of the secret
  let totalAware = 1

  // Iterate through each day to update sharers and aware counts
  for (let day = 2; day <= n; day++) {
    // Calculate the number of new sharers for today (those who learned the secret 'delay' days ago)
    const newSharers = day - delay >= 1 ? dp[day - delay] : 0

    // Calculate the number of people who forget the secret today (those who learned it 'forget' days ago)
    const peopleWhoForget = day - forget >= 1 ? dp[day - forget] : 0

    // Update the count of people who can share the secret, adjusting for new sharers and forgetters
    shareCount = (shareCount + newSharers - peopleWhoForget + MOD) % MOD

    // Number of people who become aware of the secret today
    const todayAware = shareCount

    // Store today's aware count in the dp array
    dp[day] = todayAware

    // Update the total number of people aware of the secret, adjusting for forgetters
    totalAware = (totalAware + todayAware - peopleWhoForget + MOD) % MOD
  }

  // Return the total number of people aware of the secret after n days
  return totalAware
}
