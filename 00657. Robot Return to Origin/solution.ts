/**
 * Problem: 657. Robot Return to Origin
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Determines if a sequence of moves returns to the starting point
 *
 * @param moves - String containing 'U', 'D', 'L', 'R' moves
 *
 * @returns True if robot returns to origin
 */
const judgeCircle = (moves: string): boolean => {
  // Initialize vertical (x) and horizontal (y) coordinates
  let x: number = 0,
    y: number = 0

  // Split the moves string into an array of individual characters
  const moveArray: string[] = moves.split('')

  // Loop through each move in the array
  for (let i: number = 0; i < moveArray.length; i++) {
    // If move is 'U', move up (increase x coordinate)
    if (moveArray[i] === 'U') x++
    // If move is 'D', move down (decrease x coordinate)
    else if (moveArray[i] === 'D') x--
    // If move is 'R', move right (increase y coordinate)
    else if (moveArray[i] === 'R') y++
    // If move is 'L', move left (decrease y coordinate)
    else if (moveArray[i] === 'L') y--
  }

  // If both coordinates are zero, robot returned to origin
  if (x === 0 && y === 0) return true

  // Otherwise, robot did not return to origin
  return false
}
