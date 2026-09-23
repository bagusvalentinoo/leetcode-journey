/**
 * Problem: 1805. Number of Different Integers in a String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numDifferentIntegers(word string) int {
  // Track distinct integers using hash set
  numbers := make(map[string]struct{})

  // Current scan position
  i := 0

  // Scan word for digit blocks
  for i < len(word) {
    // Mark start of current block
    j := i

    // Consume consecutive digits
    for j < len(word) && word[j] >= '0' && word[j] <= '9' {
      j++
    }

    // Check if digit block was found
    if j != i {
      // Strip leading zeros
      for i < j && word[i] == '0' {
        i++
      }

      // Mark normalized number as seen
      numbers[word[i:j]] = struct{}{}

      // Advance past digit block
      i = j
    } else {
      // Advance past non-digit character
      i++
    }
  }

  // Return the count of distinct integers
  return len(numbers)
}
