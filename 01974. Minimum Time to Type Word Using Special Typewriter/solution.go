/**
 * Problem: 1974. Minimum Time to Type Word Using Special Typewriter
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minTimeToType(word string) int {
  // Track total seconds spent moving and typing
  total := 0

  // Track previous character position starting at 'a'
  prev := 0

  // Process each character
  for _, ch := range word {
    // Convert current character to alphabet index
    curr := int(ch - 'a')

    // Compute clockwise distance between positions
    diff := curr - prev
    if diff < 0 {
      diff = -diff
    }

    // Take shorter of clockwise and counterclockwise moves
    move := diff
    if 26-diff < move {
      move = 26 - diff
    }

    // Add move cost plus one second to type the character
    total += move + 1

    // Update previous position to current character
    prev = curr
  }

  // Return the minimum seconds to type the word
  return total
}
