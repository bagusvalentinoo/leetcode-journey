/**
 * Problem: 984. String Without AAA or BBB
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 25 ms (Beats 100%)
 */

/**
 * Creates a string with 'a's and 'b's without three consecutive identical letters
 *
 * @param {number} a - Number of 'a's
 * @param {number} b - Number of 'b's
 *
 * @returns {string} - The resulting string
 */
const strWithout3a3b = (a, b) => {
  // Initialize an empty string to store the result
  let resultString = ''

  while (a > 0 || b > 0) {
    // Calculate how many 'a's and 'b's to add in this iteration
    const aCount = Math.min(a <= b / 2 ? 1 : 2, a),
      bCount = Math.min(b <= a / 2 ? 1 : 2, b)

    // Add characters based on which letter has more remaining count
    if (a < b) resultString += 'b'.repeat(bCount) + 'a'.repeat(aCount)
    else resultString += 'a'.repeat(aCount) + 'b'.repeat(bCount)

    // Decrement counters
    a -= aCount
    b -= bCount
  }

  return resultString
}
