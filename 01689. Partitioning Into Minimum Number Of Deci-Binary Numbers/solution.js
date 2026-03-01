/**
 * Problem: 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum number of deci-binary numbers needed to sum to n
 *
 * @param {string} n - String representation of the number
 *
 * @returns {number} Minimum number of deci-binary numbers
 */
const minPartitions = (n) => {
  // Check digits from 9 down to 1
  for (let digit = 9; digit > 0; digit--)
    // If current digit exists in the number, it's the maximum digit
    if (n.includes(digit.toString())) return digit

  // If no digits 1-9 found, number consists of only zeros
  return 0
}
