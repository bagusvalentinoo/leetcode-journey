/**
 * Problem: 1796. Second Largest Digit in a String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds second largest distinct digit in alphanumeric string
 *
 * @param {string} s - Alphanumeric string of lowercase letters and digits
 *
 * @returns {number} Second largest digit or -1 if it does not exist
 */
const secondHighest = (s) => {
  // Initialize largest and second largest digits as not found
  let first = -1, second = -1

  // Iterate through each character in the string by index
  for (let i = 0; i < s.length; i++) {
    // Check if current character is a digit
    if (Number(s[i]) >= 0) {
      // Convert digit character to numeric value
      const num = Number(s[i])

      // If digit is greater than largest
      if (num > first) {
        // Shift largest to second largest
        second = first
        // Update largest with current digit
        first = num
      } else if (num > second && num != first)
        // Update second largest with current digit
        second = num
    }
  }

  // Return second largest digit or -1 if it does not exist
  return second
}
