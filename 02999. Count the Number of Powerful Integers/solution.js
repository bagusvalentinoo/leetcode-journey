/**
 * Problem: 2999. Count the Number of Powerful Integers
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Counts the number of powerful integers less than or equal to x.
 *
 * @param {string} x - The number to count powerful integers for
 * @param {string} s - The suffix string
 * @param {number} limit - The maximum allowed digit value
 * @returns {number} - The total number of powerful integers
 */
const calculate = (x, s, limit) => {
  // If x is shorter than the suffix, no powerful integers can exist
  if (x.length < s.length) return 0

  // If x has the same length as the suffix, check if it matches or exceeds the suffix
  if (x.length === s.length) return x >= s ? 1 : 0

  // Extract the suffix and calculate the prefix length
  const suffix = x.slice(-s.length)
  let count = 0
  const preLen = x.length - s.length

  // Iterate through each digit in the prefix part of x
  for (let i = 0; i < preLen; i++) {
    const digit = parseInt(x[i])

    // If the current digit exceeds the limit, add all valid combinations and stop
    if (limit < digit) {
      count += Math.pow(limit + 1, preLen - i)

      return count
    }

    // Add the contribution of the current digit to the total count
    count += digit * Math.pow(limit + 1, preLen - 1 - i)
  }

  // If the suffix is valid, increment the count
  if (suffix >= s) count++

  return count
}

/**
 * Counts the number of powerful integers in the range [start, finish].
 *
 * @param {number} start - The start of the range
 * @param {number} finish - The end of the range
 * @param {number} limit - The maximum allowed digit value
 * @param {string} s - The suffix string
 * @returns {number} - The total number of powerful integers
 */
const numberOfPowerfulInt = (start, finish, limit, s) => {
  // Convert start-1 and finish to strings for easier manipulation
  const start_ = (start - 1).toString()
  const finish_ = finish.toString()

  // Use inclusion-exclusion to count powerful integers in the range
  return calculate(finish_, s, limit) - calculate(start_, s, limit)
}
