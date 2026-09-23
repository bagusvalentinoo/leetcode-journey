/**
 * Problem: 1805. Number of Different Integers in a String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts distinct integers in string ignoring leading zeros
 *
 * @param {string} word - String of digits and lowercase letters
 *
 * @returns {number} Count of different integers
 */
const numDifferentIntegers = (word) => {
  // Store word length for loop boundary
  const wordLength = word.length

  // Track distinct integer values using hash set
  const seen = new Set()

  // Track current scan position in string
  let index = 0

  // Scan string for digit blocks
  while (index < wordLength) {
    // Skip non-digit character
    if (word[index] < "0" || word[index] > "9") {
      // Move to next character
      index++

      continue
    }

    // Accumulate numeric value of current digit block
    let value = 0n

    // Parse consecutive digits into BigInt value
    while (index < wordLength && word[index] >= "0" && word[index] <= "9") {
      // Convert digit character to numeric digit
      const digit = word[index].charCodeAt(0) - 48

      // Append digit to current value
      value = value * 10n + BigInt(digit)

      // Move to next character
      index++
    }

    // Mark integer value as seen
    seen.add(value)
  }

  // Return the count of distinct integers
  return seen.size
}
