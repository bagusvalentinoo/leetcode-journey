/**
 * Problem: 1556. Thousand Separator
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Formats an integer with dots as thousands separators
 *
 * @param n - Input non-negative integer
 *
 * @returns Formatted string with thousands separators
 */
const thousandSeparator = (n: number): string => {
  // Convert integer to string for digit-by-digit processing
  const numString: string = n.toString()

  // Build the formatted result incrementally
  let result: string = ''

  // Iterate through each digit from left to right
  for (let i: number = 0; i < numString.length; i++) {
    // Insert a dot before the digit whenever the remaining digits form complete groups of three
    if (i > 0 && (numString.length - i) % 3 === 0) result += '.'

    // Append the current digit to the result
    result += numString[i]
  }

  // Return the string with thousand separators inserted
  return result
}
