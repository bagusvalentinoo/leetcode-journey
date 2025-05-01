/**
 * Problem: 12. Integer to Roman
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Convert an integer to a Roman numeral
 *
 * @param {number} num - Interger between 1 and 3999
 *
 * @returns {string} - Roman numeral representation of the integer
 */
const intToRoman = (num) => {
  // Store the final Roman numeral result
  let result = ''

  // Process number by subtracting Roman numeral values in descending order
  while (num > 0) {
    // Handle thousands (M = 1000)
    if (num >= 1000) {
      result = result + 'M'
      num = num - 1000
    }
    // Handle 900 (CM = 900)
    else if (num >= 900) {
      result = result + 'CM'
      num = num - 900
    }
    // Handle 500 (D = 500)
    else if (num >= 500) {
      result = result + 'D'
      num = num - 500
    }
    // Handle 400 (CD = 400)
    else if (num >= 400) {
      result = result + 'CD'
      num = num - 400
    }
    // Handle 100s (C = 100)
    else if (num >= 100) {
      result = result + 'C'
      num = num - 100
    }
    // Handle 90 (XC = 90)
    else if (num >= 90) {
      result = result + 'XC'
      num = num - 90
    }
    // Handle 50 (L = 50)
    else if (num >= 50) {
      result = result + 'L'
      num = num - 50
    }
    // Handle 40 (XL = 40)
    else if (num >= 40) {
      result = result + 'XL'
      num = num - 40
    }
    // Handle 10s (X = 10)
    else if (num >= 10) {
      result = result + 'X'
      num = num - 10
    }
    // Handle 9 (IX = 9)
    else if (num >= 9) {
      result = result + 'IX'
      num = num - 9
    }
    // Handle 5 (V = 5)
    else if (num >= 5) {
      result = result + 'V'
      num = num - 5
    }
    // Handle 4 (IV = 4)
    else if (num >= 4) {
      result = result + 'IV'
      num = num - 4
    }
    // Handle 1s (I = 1)
    else if (num >= 1) {
      result = result + 'I'
      num = num - 1
    }
  }

  // Return the final Roman numeral
  return result
}
