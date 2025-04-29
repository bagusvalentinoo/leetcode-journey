/**
 * Problem: 6. Zigzag Conversion
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 99.82%)
 */

/**
 * Converts a string into a zigzag pattern and returns it read line by line.
 *
 * @param {string} s - String to be converted
 * @param {number} numRows - Number of rows for zigzag conversion
 *
 * @returns {string} - Converted string in zigzag pattern
 */
const convert = (s, numRows) => {
  // If the string is empty or numRows is 1, return the string as is
  if (s.length <= 1 || numRows === 1) return s

  // Initialize an array to hold the characters in zigzag order
  const chars = []

  // Iterate through each row
  for (let r = 0; r < numRows; r++) {
    // Calculate the number of characters to skip for zigzag pattern
    const skipDown =
      r === numRows - 1 ? 2 + (numRows - 2) * 2 : 2 + (numRows - r - 2) * 2

    // Calculate the number of characters to skip for zigzag pattern
    const skipUp = r === 0 ? 2 + (numRows - 2) * 2 : 2 + (r - 1) * 2

    // Initialize the direction for zigzag pattern
    let direction = 1

    // Iterate through the string to fill the characters in zigzag order
    for (let i = r; i < s.length; i += direction > 0 ? skipUp : skipDown) {
      // Push the character into the zigzag array
      chars.push(s[i])
      // Change the direction for zigzag pattern
      direction *= -1
    }
  }

  // Return the characters joined as a string
  return chars.join('')
}
