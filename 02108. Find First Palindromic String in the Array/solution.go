/**
 * Problem: 2108. Find First Palindromic String in the Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func firstPalindrome(words []string) string {
  // Check each word in its original order
  for _, word := range words {
    // Compare characters from both ends toward the center
    left, right := 0, len(word)-1

    for left < right && word[left] == word[right] {
      left++
      right--
    }

    // Return the first word whose characters all match
    if left >= right {
      return word
    }
  }

  // Return an empty string when no palindrome exists
  return ""
}
