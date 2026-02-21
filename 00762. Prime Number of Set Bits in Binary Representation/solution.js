/**
 * Problem: 762. Prime Number of Set Bits in Binary Representation
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Counts numbers in the range [left, right] with a prime number of set bits
 *
 * @param  {number} left  - The start of the range
 * @param  {number} right - The end of the range
 *
 * @returns {number} The count of numbers with a prime number of set bits
 */
const countPrimeSetBits = (left, right) => {
  // Helper function to count set bits in a number
  const countSetBits = (n) => {
    // Initialize count to 0
    let count = 0

    // While n is not 0
    while (n) {
      // Increment count
      n &= n - 1
      count++
    }

    // Return count
    return count
  }

  // Initialize count to 0
  let count = 0

  // Iterate through each number in the range
  for (let i = left; i <= right; i++) {
    // Count set bits in the current number
    const set = countSetBits(i)
    // Skip if set is 1 or 0
    if (set === 1 || set === 0) continue

    // Check if set is prime
    let valid = true

    // Iterate from 2 to the square root of set
    for (let j = 2; j * j <= set; j++)
      // If set is divisible by j
      if (set % j === 0) {
        // Set valid to false
        valid = false

        // Break the loop
        break
      }

    // If set is prime, increment count
    if (valid) count++
  }

  // Return count
  return count
}
