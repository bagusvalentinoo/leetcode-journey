/**
 * Problem: 13. Roman to Integer
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Converts Roman numeral to integer
 *
 * @param {string} s - Roman numeral string
 *
 * @returns {number} - Integer value
 */
const romanToInt = (s) => {
  // Map Roman numerals to their integer values
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  // Initialize total and previous value for calculation
  let total = 0
  let prevValue = 0

  // Loop through each character in the Roman numeral string
  for (let i = 0; i < s.length; i++) {
    const currentValue = romanMap[s[i]]

    // Add or subtract based on the comparison with the previous value
    currentValue > prevValue
      ? (total += currentValue - 2 * prevValue)
      : (total += currentValue)
    prevValue = currentValue
  }

  // Return the final integer value
  return total
}
