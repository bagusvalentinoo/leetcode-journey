/**
 * Problem: 2399. Check Distances Between Same Letters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkDistances(s string, distance []int) bool {
  // Store the first position seen for every letter
  firstPositions := make([]int, 26)

  // Mark each letter as unseen
  for i := range firstPositions {
    firstPositions[i] = -1
  }

  // Check each letter as it appears in the string
  for i := 0; i < len(s); i++ {
    // Convert the current letter to its alphabet index
    letterIndex := s[i] - 'a'

    // Record a letter's first occurrence
    if firstPositions[letterIndex] == -1 {
      firstPositions[letterIndex] = i
      continue
    }

    // Reject distances that do not match the required gap
    if i-firstPositions[letterIndex]-1 != distance[letterIndex] {
      return false
    }
  }

  // All repeated letters have their required distances
  return true
}
