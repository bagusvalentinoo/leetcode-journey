/**
 * Problem: 972. Equal Rational Numbers
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if two string representations of rational numbers are equal
 *
 * @param {string} s - First rational number string
 * @param {string} t - Second rational number string
 *
 * @returns {boolean} - True if equal, false otherwise
 */
const isRationalEqual = (s, t) => {
  // Number of decimal places to compare
  const precision = 25

  // Expands a number string into a fixed decimal representation
  const expand = (str) => {
    const [integerPart, decimalPart] = str.split('.')

    // Initialize variables for non-repeating and repeating parts
    let nonRepeating = '',
      repeating = ''

    if (decimalPart) {
      if (decimalPart.includes('(')) {
        // Extract non-repeating and repeating parts
        nonRepeating = decimalPart.slice(0, decimalPart.indexOf('('))
        repeating = decimalPart.slice(
          decimalPart.indexOf('(') + 1,
          decimalPart.indexOf(')')
        )
      }
      // If no repeating part, use the whole decimal part
      else nonRepeating = decimalPart
    }

    let decimal = nonRepeating

    // Expand repeating part to reach desired precision
    while (decimal.length < precision) {
      if (!repeating) break
      decimal += repeating
    }

    // Ensure exact precision length with padding if needed
    decimal = (decimal + '0'.repeat(precision)).slice(0, precision)

    return `${integerPart}.${decimal}`
  }

  // Expand both input strings to comparable format
  const expandedS = expand(s),
    expandedT = expand(t)

  // Compare the expanded numerical values
  return Number(expandedS) === Number(expandedT)
}
