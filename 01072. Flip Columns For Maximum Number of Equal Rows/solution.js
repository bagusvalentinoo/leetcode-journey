/**
 * Problem: 1072. Flip Columns For Maximum Number of Equal Rows
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 29 ms (Beats 100%)
 */

/**
 * Returns the max number of equal rows after flipping any columns
 *
 * @param {number[][]} matrix - Binary matrix
 *
 * @returns {number} - Max equal rows after flips
 */
const maxEqualRowsAfterFlips = (matrix) => {
  // Create an object to store the frequency of each row pattern after possible flips
  const patternFrequency = {}
  // Initialize the variable to keep track of the maximum frequency found
  let maxRows = 0

  // Iterate through each row in the matrix
  for (const row of matrix) {
    // Initialize a string to represent the normalized pattern of the row
    let patternKey = ''

    // If the first element is 0, flip the entire row for normalization
    if (!row[0]) {
      for (const num of row) {
        // Flip each bit and append to the patternKey string
        patternKey += num ? 0 : 1
      }
    } else {
      // If the first element is 1, keep the row as is
      for (const num of row) {
        // Append each bit to the patternKey string
        patternKey += num
      }
    }

    // If this patternKey is not in the patternFrequency object, initialize it to 0
    if (!(patternKey in patternFrequency)) patternFrequency[patternKey] = 0

    // Increment the frequency count for this patternKey
    patternFrequency[patternKey] += 1
    // Update maxRows if the current pattern's frequency is greater
    maxRows = Math.max(maxRows, patternFrequency[patternKey])
  }

  // Return the maximum number of equal rows after flips
  return maxRows
}
