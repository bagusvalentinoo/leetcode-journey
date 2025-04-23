/**
 * Problem: 1399. Count Largest Group
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Initialize reference arrays
const ref = [[1], new Uint8Array(10), new Uint8Array(19), new Uint8Array(28)]

/**
 * Counts groups by digit sum and returns the count of the largest group
 *
 * @param {number} n - Upper limit
 *
 * @returns {number} - Count of the largest group
 */
const countLargestGroup = (n) => {
  // Initialize counts and digits arrays
  const counts = new Uint16Array(37),
    digits = [1, 0, 0, 0]

  // Initialize power and psum variables
  let power = 0,
    psum = 0

  // Calculate digit sum
  for (let num = Math.min(n, 9999); num; num = ~~(num / 10))
    psum += digits[power++] += num % 10

  // Initialize reference arrays
  for (let d = 0; d < digits.length; d++) {
    // Get current digit, previous and current reference arrays
    const digit = digits[d], // Current digit
      prev = ref[d], // Previous reference array
      curr = ref[d + 1], // Current reference array
      currSize = !curr || curr.at(-1) ? 0 : curr.length, // Current array size
      limit = Math.max(d * 9 + digit, currSize) // Limit for current array

    psum -= digit // Update psum by subtracting current digit

    // Update counts and reference arrays
    for (let i = 0, val = 0; i < limit; i++) {
      // Update count and reference array
      counts[psum + i] += val += ~~prev[i] - ~~prev[i - digit]

      // If current array is not empty, update current array
      if (currSize) curr[i] = ~~curr[i - 1] + ~~prev[i] - ~~prev[i - 10]
    }
  }

  counts[0] = 0 // Initialize count for digit sum 0
  // Find maximum count
  const max = Math.max(...counts)

  // Return count of the largest group
  return counts.filter((x) => x === max).length
}
