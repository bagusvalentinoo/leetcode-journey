/**
 * Problem: 1880. Check if Word Equals Summation of Two Words
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isSumEqual(firstWord string, secondWord string, targetWord string) bool {
  // Helper function to convert word to numerical value
  getValue := func(word string) int {
    // Initialize accumulated number
    num := 0

    // Process each character in the word
    for _, ch := range word {
      // Shift digits left and append letter value (a -> 0, b -> 1, ...)
      num = num*10 + int(ch-'a')
    }

    // Return the numerical value of the word
    return num
  }

  // Convert words to numerical values
  first, second, target := getValue(firstWord), getValue(secondWord), getValue(targetWord)

  // Return true if summation of first two values equals target value
  return first+second == target
}
