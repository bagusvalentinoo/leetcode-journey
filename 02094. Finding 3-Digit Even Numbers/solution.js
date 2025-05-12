/**
 * Problem: 2094. Finding 3-Digit Even Numbers
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Returns sorted array of unique 3-digit even numbers formed from the input digits
 *
 * @param {number[]} digits - Array of digits (0-9)
 *
 * @returns {number[]} - Sorted array of valid numbers
 */
const findEvenNumbers = (digits) => {
  // Store unique even numbers and track digit frequency
  const result = new Array(),
    repeats = new Array(10).fill(0)

  // Count occurrences of each digit
  for (const digit of digits) repeats[digit]++

  // Check all possible 3-digit even numbers (last digit must be even)
  for (let i = 100; i <= 999; i += 2) {
    // Extract individual digits
    const hundreds = Math.floor(i / 100),
      tens = Math.floor((i % 100) / 10),
      ones = i % 10

    // Verify if we can form this number with available digits
    let correct = true

    // Try to use each digit and check if we have enough
    if (--repeats[hundreds] < 0) correct = false
    if (--repeats[tens] < 0) correct = false
    if (--repeats[ones] < 0) correct = false
    if (correct) result.push(i)

    // Restore digit counts for next iteration
    repeats[hundreds]++
    repeats[tens]++
    repeats[ones]++
  }

  return result
}
