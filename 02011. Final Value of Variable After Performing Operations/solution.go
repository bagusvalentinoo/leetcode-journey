/**
 * Problem: 2011. Final Value of Variable After Performing Operations
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func finalValueAfterOperations(operations []string) int {
  // Start X at its specified initial value
  value := 0

  // Adjust X according to each operation's middle character
  for _, operation := range operations {
    if operation[1] == '+' {
      value++
    } else {
      value--
    }
  }

  // Return the final value of X
  return value
}
