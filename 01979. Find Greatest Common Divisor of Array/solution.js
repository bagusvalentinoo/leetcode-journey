/**
 * Problem: 1979. Find Greatest Common Divisor of Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns GCD of smallest and largest numbers in array
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} GCD of minimum and maximum values
 */
const findGCD = (nums) => {
  // Helper to compute GCD of two numbers using Euclidean algorithm
  const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b))

  // Find smallest and largest numbers in the array
  const smallest = Math.min(...nums), largest = Math.max(...nums)

  // Return GCD of smallest and largest numbers
  return getGCD(smallest, largest)
}
