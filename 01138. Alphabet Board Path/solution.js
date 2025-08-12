/**
 * Problem: 1138. Alphabet Board Path
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 32 ms (Beats 100%)
 */

/**
 * Returns moves to spell a string on the alphabet board
 *
 * @param {string} target - String to spell
 *
 * @returns {string} - Move sequence
 */
const alphabetBoardPath = (target) => {
  // Initialize the result string to store the sequence of moves
  let moves = ''

  // Set the starting position at the top-left corner of the board (row 0, column 0)
  let currentRow = 0,
    currentCol = 0

  // Iterate through each character in the target string
  for (const character of target) {
    // Calculate the zero-based index of the character ('a' is 0, 'b' is 1, ..., 'z' is 25)
    const characterIndex = character.charCodeAt(0) - 97

    // Determine the row and column of the character on the board
    const targetRow = Math.floor(characterIndex / 5)
    const targetCol = characterIndex % 5

    // Move left if the target column is to the left of the current column
    if (targetCol < currentCol) moves += 'L'.repeat(currentCol - targetCol)
    // Move up if the target row is above the current row
    if (targetRow < currentRow) moves += 'U'.repeat(currentRow - targetRow)
    // Move down if the target row is below the current row
    if (targetRow > currentRow) moves += 'D'.repeat(targetRow - currentRow)
    // Move right if the target column is to the right of the current column
    if (targetCol > currentCol) moves += 'R'.repeat(targetCol - currentCol)

    // Add '!' to indicate the character has been selected
    moves += '!'
    // Update the current position to the new character's position
    currentCol = targetCol
    currentRow = targetRow
  }

  // Return the complete sequence of moves
  return moves
}
