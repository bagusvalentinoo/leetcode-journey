/**
 * Problem: 2075. Decode the Slanted Ciphertext
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Decodes ciphertext from diagonal grid reading
 *
 * @param encodedText - Encoded text
 * @param rows - Grid rows
 *
 * @returns Decoded text
 */
const decodeCiphertext = (encodedText: string, rows: number): string => {
  // If only one row, the text is already in original order
  if (rows === 1) return encodedText

  // Get total length of encoded text
  const totalLength: number = encodedText.length

  // Calculate number of columns in the grid
  const cols: number = totalLength / rows

  // Initialize indices: row, column, position in encoded text
  let row: number = 0,
    col: number = 0,
    position: number = 0

  // Store decoded characters
  let decoded: string = ''

  // Traverse the grid in diagonal order
  while (position < totalLength) {
    // Add character at current position to decoded string
    decoded += encodedText[position]
    // Move to next row
    row++

    // If reached bottom row, move to next column and reset row
    if (row === rows) {
      row = 0
      col++
    }

    // Calculate next position in encoded text
    position = row * (cols + 1) + col
  }

  // Remove trailing spaces from decoded string
  while (decoded.length > 0 && decoded[decoded.length - 1] === ' ')
    decoded = decoded.slice(0, -1)

  // Return decoded text
  return decoded
}
