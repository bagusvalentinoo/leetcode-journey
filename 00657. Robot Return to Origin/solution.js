/**
 * Problem: 657. Robot Return to Origin
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if a sequence of moves returns to the starting point
 *
 * @param {string} moves - String containing 'U', 'D', 'L', 'R' moves
 *
 * @returns {boolean} True if robot returns to origin
 */
const judgeCircle = (moves) => {
  // Initialize vertical (x) and horizontal (y) coordinates
  let x = 0,
    y = 0

  // Split the moves string into an array of individual characters
  const ans = moves.split('')

  // Loop through each move in the array
  for (let i = 0; i < ans.length; i++) {
    // If move is 'U', move up (increase x coordinate)
    if (ans[i] === 'U') x++
    // If move is 'D', move down (decrease x coordinate)
    else if (ans[i] === 'D') x--
    // If move is 'R', move right (increase y coordinate)
    else if (ans[i] === 'R') y++
    // If move is 'L', move left (decrease y coordinate)
    else if (ans[i] === 'L') y--
  }

  // If both coordinates are zero, robot returned to origin
  if (x === 0 && y === 0) return true

  // Otherwise, robot did not return to origin
  return false
}
