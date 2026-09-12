/**
 * Problem: 1652. Defuse the Bomb
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func decrypt(code []int, k int) []int {
  // Store array length for circular index wrapping
  codeLength := len(code)

  // Initialize output array with zeros to cover the k == 0 case
  answer := make([]int, codeLength)

  // Handle k == 0 by returning all zeros directly
  if k == 0 {
    return answer
  }

  // Store number of elements to sum for each position
  steps := k
  if steps < 0 {
    steps = -steps
  }

  // Process each position in the circular array
  for i := 0; i < codeLength; i++ {
    // Accumulate sum of neighboring elements for the current position
    windowSum := 0

    // Sum the next k or previous -k elements with wraparound
    for j := 1; j <= steps; j++ {
      // Wrap index around the circular array using modulo
      if k > 0 {
        windowSum += code[(i+j)%codeLength]
      } else {
        windowSum += code[(i-j+codeLength)%codeLength]
      }
    }

    // Store the decrypted value for the current position
    answer[i] = windowSum
  }

  // Return the decrypted code array
  return answer
}
