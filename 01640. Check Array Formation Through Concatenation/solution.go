/**
 * Problem: 1640. Check Array Formation Through Concatenation
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canFormArray(arr []int, pieces [][]int) bool {
  // Map first element of each piece to the piece itself
  pieceMap := make(map[int][]int, len(pieces))

  // Populate map using first value as key since all integers are distinct
  for _, piece := range pieces {
    pieceMap[piece[0]] = piece
  }

  // Track current position in arr
  index := 0

  // Walk through arr matching whole pieces
  for index < len(arr) {
    // Look up the piece that must start at current position
    piece, ok := pieceMap[arr[index]]

    // No piece starts here so arr cannot be formed
    if !ok {
      return false
    }

    // Verify every element of the piece matches arr in order
    for _, value := range piece {
      // Mismatch means pieces cannot form arr
      if value != arr[index] {
        return false
      }

      // Advance to next position in arr
      index++
    }
  }

  // All positions matched whole pieces
  return true
}
