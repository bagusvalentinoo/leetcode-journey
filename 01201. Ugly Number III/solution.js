/**
 * Problem: 1201. Ugly Number III
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the nth ugly number divisible by a, b, or c
 *
 * @param {number} n - The position of the ugly number
 * @param {number} a - First divisor
 * @param {number} b - Second divisor
 * @param {number} c - Third divisor
 *
 * @returns {number} - The nth ugly number
 */
const nthUglyNumber = (n, a, b, c) => {
  // Helper function to calculate the greatest common divisor (GCD) of two numbers
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y))

  // Helper function to calculate the least common multiple (LCM) of two numbers
  const lcm = (x, y) => (x / gcd(x, y)) * y

  // Calculate LCMs for pairs and triplet of divisors
  const lcmAB = lcm(a, b), // LCM of a and b
    lcmBC = lcm(b, c), // LCM of b and c
    lcmAC = lcm(a, c), // LCM of a and c
    lcmABC = lcm(a, lcmBC) // LCM of a, b, and c

  // Function to count how many numbers <= num are divisible by a, b, or c using inclusion-exclusion principle
  const countUglyNumbers = (num) =>
    Math.floor(num / a) +
    Math.floor(num / b) +
    Math.floor(num / c) -
    Math.floor(num / lcmAB) -
    Math.floor(num / lcmBC) -
    Math.floor(num / lcmAC) +
    Math.floor(num / lcmABC)

  // Initialize binary search boundaries
  let left = 1,
    right = 2 * 10 ** 9

  // Binary search to find the nth ugly number
  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    // If count of ugly numbers up to mid is at least n, move right boundary
    if (countUglyNumbers(mid) >= n) right = mid
    // Otherwise, move left boundary
    else left = mid + 1
  }

  // Return the nth ugly number
  return left
}
