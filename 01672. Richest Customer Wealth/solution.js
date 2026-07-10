/**
 * Problem: 1672. Richest Customer Wealth
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Maximum wealth across customers
 *
 * @param {number[][]} accounts - Customer bank balances
 *
 * @returns {number} Highest total wealth
 */
const maximumWealth = (accounts) => {
  // Initialize answer to track maximum wealth
  let maxWealth = 0

  // Iterate through each customer
  for (let i = 0; i < accounts.length; i++) {
    // Calculate total wealth for current customer by summing all accounts
    const totalWealth = accounts[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )

    // Update maximum wealth if current customer is richer
    maxWealth = Math.max(maxWealth, totalWealth)
  }

  // Return the maximum wealth found
  return maxWealth
}
