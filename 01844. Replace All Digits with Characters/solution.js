/**
 * Problem: 1844. Replace All Digits with Characters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces digits at odd indices with shifted characters
 *
 * @param {string} s - String with letters at even indices and digits at odd indices
 *
 * @returns {string} String after replacing all digits
 */
const replaceDigits = (s) => {
  // Convert string to mutable character array
  const chars = [...s]

  // Store string length for loop boundary
  const n = chars.length

  // Process every odd index to replace digits
  for (let i = 1; i < n; i += 2)
    // Shift previous character forward by digit value
    chars[i] = String.fromCharCode(
      chars[i - 1].charCodeAt(0) + Number(chars[i])
    )

  // Return the joined string after replacing all digits
  return chars.join('')
}
