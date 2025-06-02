/**
 * Problem: 1006. Clumsy Factorial
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func clumsy(n int) int {
  // Base cases for small values of n
  if n == 1 { return 1 }
  if n == 2 { return 2 }
  if n == 3 { return 6 }
  if n == 4 { return 7 }

  // Pattern for n % 4 === 1 or n % 4 === 2
  if n % 4 == 1 { return n + 2 }
  if n % 4 == 2 { return n + 2 }

  // Pattern for n % 4 === 3
  if n % 4 == 3 { return n - 1 }

  // Default case for n % 4 === 0
  return n + 1
}