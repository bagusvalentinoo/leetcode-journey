/**
 * Problem: 2283. Check if Number Has Equal Digit Count and Digit Value
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check whether each index matches its digit frequency
 *
 * @param {string} num - String of digits
 *
 * @returns {boolean} Whether every digit count matches its index value
 */
const digitCount = (num) => {
  // Count occurrences of each digit from 0 to 9
  const counts = new Int32Array(10)

  // Record the frequency of every digit in the input string
  for (const digit of num) counts[Number(digit)]++

  // Compare each index's required count with its actual count
  for (let i = 0; i < num.length; i++) {
    if (counts[i] !== Number(num[i])) return false
  }

  // Return true when every required count matches
  return true
}
