/**
 * Problem: 2180. Count Integers With Even Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts positive integers less than or equal to num with even digit sum
 *
 * @param {number} num - Upper bound positive integer
 *
 * @returns {number} Count of integers with even digit sum
 */
const countEven = (num) => {
  // Initialize digit sum accumulator and temporary variable
  let digitSum = 0, temp = num

  // Extract each digit and accumulate the sum
  while (temp > 0) {
    digitSum += temp % 10
    temp = Math.floor(temp / 10)
  }

  // Return count based on parity of the digit sum
  return digitSum % 2 === 0 ? Math.floor(num / 2) : Math.floor((num - 1) / 2)
}
