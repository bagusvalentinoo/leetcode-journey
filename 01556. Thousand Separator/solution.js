/**
 * Problem: 1556. Thousand Separator
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Formats an integer with dots as thousands separators
 *
 * @param {number} n - Input non-negative integer
 *
 * @returns {string} Formatted string with thousands separators
 */
const thousandSeparator = (n) => {
  // Convert integer to string for digit-by-digit processing
  const numString = n.toString()

  // Build the formatted result incrementally
  let result = ''

  // Iterate through each digit from left to right
  for (let i = 0; i < numString.length; i++) {
    // Insert a dot before the digit whenever the remaining digits form complete groups of three
    if (i > 0 && (numString.length - i) % 3 === 0) result += '.'

    // Append the current digit to the result
    result += numString[i]
  }

  // Return the string with thousand separators inserted
  return result
}
