/**
 * Problem: 2180. Count Integers With Even Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countEven(num int) int {
  // Initialize digit sum accumulator and temporary variable
  digitSum, temp := 0, num

  // Extract each digit and accumulate the sum
  for temp > 0 {
    digitSum += temp % 10
    temp /= 10
  }

  // Return count based on parity of the digit sum
  if digitSum%2 == 0 {
    return num / 2
  }

  return (num - 1) / 2
}
