/**
 * Problem: 1624. Largest Substring Between Two Equal Characters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxLengthBetweenEqualCharacters(s string) int {
  // Track first occurrence index of each letter, -1 means unseen
  firstIndex := make([]int, 26)

  // Initialize all entries to -1 to mark characters as unseen
  for i := 0; i < 26; i++ {
    firstIndex[i] = -1
  }

  // Store maximum length found, -1 when no equal pair exists
  maxLength := -1

  // Scan each character with its index
  for i := 0; i < len(s); i++ {
    // Convert character to array index 0-25
    charIndex := int(s[i] - 'a')

    // Check if character was seen before
    if firstIndex[charIndex] == -1 {
      // Record first occurrence index
      firstIndex[charIndex] = i
    } else {
      // Calculate length between first occurrence and current index excluding both ends
      currentLength := i - firstIndex[charIndex] - 1

      // Update maximum length if current pair is longer
      if currentLength > maxLength {
        maxLength = currentLength
      }
    }
  }

  // Return the longest length found, or -1 when no character repeats
  return maxLength
}
