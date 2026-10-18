/**
 * Problem: 2042. Check if Numbers Are Ascending in a Sentence
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func areNumbersAscending(s string) bool {
  // Track the most recent number in the sentence
  previousNumber := 0
  currentNumber := 0
  isNumber := false

  // Scan each character and one final token boundary
  for index := 0; index <= len(s); index++ {
    // Finish and compare a number when its token ends
    if index == len(s) || s[index] == ' ' {
      if isNumber {
        // Reject a number that is not greater than its predecessor
        if currentNumber <= previousNumber {
          return false
        }

        // Store the current number for the next comparison
        previousNumber = currentNumber
      }

      // Reset the state before scanning the next token
      currentNumber = 0
      isNumber = false
      continue
    }

    // Accumulate digits because each token is entirely a word or number
    if s[index] >= '0' && s[index] <= '9' {
      currentNumber = currentNumber*10 + int(s[index]-'0')
      isNumber = true
    }
  }

  // All numbers appeared in strictly increasing order
  return true
}
