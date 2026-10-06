/**
 * Problem: 1945. Sum of Digits of String After Convert
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Convert letters to alphabet positions and repeatedly sum their digits
 *
 * @param {string} s - Lowercase English string to convert
 * @param {number} k - Number of digit-sum transformations
 *
 * @returns {number} Result after all transformations
 */
const getLucky = (s, k) => {
  // Store the result of the first digit-sum transformation
  let transformedValue = 0

  // Convert each letter and add the digits of its alphabet position
  for (const character of s) {
    // Calculate the one-based alphabet position for the current letter
    const alphabetPosition = character.charCodeAt(0) - 96

    // Add both decimal digits to avoid constructing the converted integer
    transformedValue +=
      Math.floor(alphabetPosition / 10) + (alphabetPosition % 10)
  }

  // Perform the remaining digit-sum transformations
  for (let transformation = 1; transformation < k; transformation++) {
    // Store the sum of digits for the current transformed value
    let digitSum = 0

    // Extract and add every digit from the current value
    while (transformedValue > 0) {
      // Add the least significant digit to the current sum
      digitSum += transformedValue % 10
      // Remove the least significant digit before the next iteration
      transformedValue = Math.floor(transformedValue / 10)
    }

    // Use the computed digit sum for the next transformation
    transformedValue = digitSum
  }

  // Return the value after exactly k transformations
  return transformedValue
}
