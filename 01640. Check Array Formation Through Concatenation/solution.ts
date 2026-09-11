/**
 * Problem: 1640. Check Array Formation Through Concatenation
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if arr can be formed by concatenating pieces in any order
 *
 * @param arr - Target array of distinct integers
 * @param pieces - Array of pieces that cannot be reordered internally
 *
 * @returns True if arr can be formed from pieces
 */
const canFormArray = (arr: number[], pieces: number[][]): boolean => {
  // Map first element of each piece to the piece itself
  const pieceMap: Map<number, number[]> = new Map()

  // Populate map using first value as key since all integers are distinct
  for (const piece of pieces) pieceMap.set(piece[0], piece)

  // Track current position in arr
  let index: number = 0

  // Walk through arr matching whole pieces
  while (index < arr.length) {
    // Look up the piece that must start at current position
    const piece: number[] | undefined = pieceMap.get(arr[index])

    // No piece starts here so arr cannot be formed
    if (piece === undefined) return false

    // Verify every element of the piece matches arr in order
    for (const value of piece) {
      // Mismatch means pieces cannot form arr
      if (value !== arr[index]) return false

      // Advance to next position in arr
      index++
    }
  }

  // All positions matched whole pieces
  return true
}
