/**
 * Problem: 1033. Moving Stones Until Consecutive
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates min and max moves to make three stones consecutive
 *
 * @param {number} a - First stone position
 * @param {number} b - Second stone position
 * @param {number} c - Third stone position
 *
 * @returns {number[]} - [min moves, max moves]
 */
const numMovesStones = (a, b, c) => {
  // Sort the three stone positions in ascending order to work with left, middle, right positions
  const stones = [a, b, c].sort((x, y) => x - y)

  // Calculate the number of empty spaces between adjacent stones
  // dist1: empty spaces between leftmost and middle stone
  // dist2: empty spaces between middle and rightmost stone
  const dist1 = stones[1] - stones[0] - 1,
    dist2 = stones[2] - stones[1] - 1

  // Initialize variables to store minimum and maximum moves required
  let min, max

  // Case 1: All stones are already consecutive (no gaps between them)
  if (dist1 === 0 && dist2 === 0) {
    min = 0 // No moves needed
    max = 0 // No moves needed
  }
  // Case 2: Either stones are already adjacent OR there's exactly 1 empty space
  // This means we can make all stones consecutive in just 1 move
  else if (dist1 === 0 || dist2 === 0 || dist1 === 1 || dist2 === 1) {
    min = 1 // Only 1 move needed to make them consecutive
    max = dist1 + dist2 // Maximum moves = total empty spaces (move stones one by one)
  }
  // Case 3: Both gaps have 2 or more empty spaces
  // We need 2 moves minimum to make them consecutive
  else {
    min = 2 // Need 2 moves to bring stones together
    max = dist1 + dist2 // Maximum moves = total empty spaces
  }

  // Return array containing [minimum moves, maximum moves]
  return [min, max]
}
