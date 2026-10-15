/**
 * Problem: 2000. Reverse Prefix of Word
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reversePrefix(word string, ch byte) string {
  // Find first occurrence of target character
  endIndex := -1

  // Scan word for first matching character
  for i := 0; i < len(word); i++ {
    // Record index on first match and stop scanning
    if word[i] == ch {
      endIndex = i
      break
    }
  }

  // Return original word if character not found
  if endIndex == -1 {
    return word
  }

  // Convert string to bytes for in-place reversal
  chars := []byte(word)

  // Initialize two pointers at prefix boundaries
  left, right := 0, endIndex

  // Reverse prefix with two-pointer swap
  for left < right {
    // Swap characters at left and right pointers
    temp := chars[left]
    chars[left] = chars[right]
    chars[right] = temp
    left++
    right--
  }

  // Convert bytes back into string
  return string(chars)
}
