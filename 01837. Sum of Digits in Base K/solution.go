/**
 * Problem: 1837. Sum of Digits in Base K
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumBase(n int, k int) int {
  // Accumulate base-k digits
  digitSum := 0

  // Extract least significant digit until n is consumed
  for n > 0 {
    // Add current remainder as the next base-k digit
    digitSum += n % k

    // Drop the processed digit
    n /= k
  }

  // Return total of base-k digits
  return digitSum
}
