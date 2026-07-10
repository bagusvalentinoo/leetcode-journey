/**
 * Problem: 1672. Richest Customer Wealth
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Maximum wealth across customers
 *
 * @param accounts - Customer bank balances
 *
 * @returns Highest total wealth
 */
const maximumWealth = (accounts: number[][]): number => {
  // Initialize answer to track maximum wealth
  let maxWealth: number = 0

  // Iterate through each customer
  for (let i: number = 0; i < accounts.length; i++) {
    // Calculate total wealth for current customer by summing all accounts
    const totalWealth: number = accounts[i].reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    )

    // Update maximum wealth if current customer is richer
    maxWealth = Math.max(maxWealth, totalWealth)
  }

  // Return the maximum wealth found
  return maxWealth
}
