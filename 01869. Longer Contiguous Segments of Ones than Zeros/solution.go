/**
 * Problem: 1869. Longer Contiguous Segments of Ones than Zeros
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkZeroOnes(s string) bool {
  // Track longest segments found for each character
  maxOnes, maxZeros := 0, 0

  // Track current running segment lengths
  currentOnes, currentZeros := 0, 0

  // Scan each character in the binary string
  for _, ch := range s {
    // Extend ones run and reset zeros run
    if ch == '1' {
      // Increment current ones streak
      currentOnes++

      // Reset zeros streak
      currentZeros = 0

      // Update longest ones segment
      if currentOnes > maxOnes {
        maxOnes = currentOnes
      }
    } else {
      // Increment current zeros streak
      currentZeros++

      // Reset ones streak
      currentOnes = 0

      // Update longest zeros segment
      if currentZeros > maxZeros {
        maxZeros = currentZeros
      }
    }
  }

  // Longest ones segment must be strictly longer than longest zeros segment
  return maxOnes > maxZeros
}
