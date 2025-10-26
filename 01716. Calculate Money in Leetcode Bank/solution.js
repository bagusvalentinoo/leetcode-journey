/**
 * Problem: 1716. Calculate Money in Leetcode Bank
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates total money after n days
 *
 * @param {number} n - Number of days
 *
 * @returns {number} - Total money
 */
const totalMoney = (n) => {
  // Calculate the number of full weeks in the given days
  const w = Math.floor(n / 7)

  // Calculate the remaining days after full weeks
  const r = n % 7

  // Calculate the total money saved during full weeks
  // 28 is the sum of money saved in one full week (1+2+3+4+5+6+7)
  // Add the arithmetic progression sum for additional weeks
  const fullWeeksSum = w * 28 + 7 * ((w * (w - 1)) / 2)

  // Calculate the total money saved during the remaining days
  // Add the arithmetic progression sum starting from (1 + w)
  const remSum = r * (1 + w) + (r * (r - 1)) / 2

  // Return the total money saved after n days
  return fullWeeksSum + remSum
}
