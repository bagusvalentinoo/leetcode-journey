/**
 * Problem: 1952. Three Divisors
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isThree(n int) bool {
  // Count the positive divisors found while examining divisor pairs
  divisorCount := 0

  // Check every possible divisor up to the square root of n
  for divisor := 1; divisor*divisor <= n; divisor++ {
    // Skip values that do not divide n evenly
    if n%divisor != 0 {
      continue
    }

    // A square root contributes one divisor instead of a pair
    if divisor*divisor == n {
      divisorCount++
    } else {
      // Every other divisor has a distinct matching divisor
      divisorCount += 2
    }

    // Return false once more than three divisors are found
    if divisorCount > 3 {
      return false
    }
  }

  // Return whether exactly three positive divisors were found
  return divisorCount == 3
}
